import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import colors from '../../theme/colors';
import fontType from '../../theme/fonts';

const EditProduct = ({ route, navigation }) => {
    const { productId } = route.params;
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        stock: '',
        image: null
    });
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `https://68346376464b49963602974c.mockapi.io/api/pruducts/${productId}`
                );
                const product = response.data;
                setFormData({
                    name: product.name,
                    price: product.price.toString(),
                    description: product.description,
                    category: product.category,
                    stock: product.stock.toString(),
                    image: { uri: product.image || 'https://placehold.co/400' }
                });
            } catch (error) {
                Alert.alert('Error', 'Failed to load product data');
                navigation.goBack();
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const selectImage = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: 'photo',
                quality: 0.8,
                maxWidth: 800,
                maxHeight: 800
            });

            if (!result.didCancel && !result.errorCode) {
                const selectedImage = result.assets[0];
                setFormData({
                    ...formData,
                    image: {
                        uri: selectedImage.uri,
                        name: selectedImage.fileName,
                        type: selectedImage.type
                    }
                });
            }
        } catch (error) {
            console.error('Image picker error:', error);
            Alert.alert('Error', 'Failed to select image');
        }
    };

    const handleSubmit = async () => {
        // Validasi form
        if (!formData.name || !formData.price || !formData.category) {
            Alert.alert('Error', 'Please fill in all required fields');
            return;
        }

        setUpdating(true);

        try {
            const productData = {
                name: formData.name,
                price: parseFloat(formData.price),
                description: formData.description,
                category: formData.category,
                stock: parseInt(formData.stock) || 0,
                image: formData.image?.uri || 'https://placehold.co/400',
                updatedAt: new Date().toISOString()
            };

            const response = await axios.put(
                `https://68346376464b49963602974c.mockapi.io/api/pruducts/${productId}`,
                productData
            );

            if (response.status === 200) {
                Alert.alert('Success', 'Product updated successfully', [
                    { text: 'OK', onPress: () => navigation.goBack() }
                ]);
            }
        } catch (error) {
            console.error('Error updating product:', error);
            Alert.alert('Error', 'Failed to update product. Please try again.');
        } finally {
            setUpdating(false);
        }
    };

    const handleDelete = async () => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this product?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            setUpdating(true);
                            const response = await axios.delete(
                                `https://68346376464b49963602974c.mockapi.io/api/pruducts/${productId}`
                            );

                            if (response.status === 200) {
                                Alert.alert('Success', 'Product deleted successfully', [
                                    { text: 'OK', onPress: () => navigation.goBack() }
                                ]);
                            }
                        } catch (error) {
                            console.error('Error deleting product:', error);
                            Alert.alert('Error', 'Failed to delete product. Please try again.');
                        } finally {
                            setUpdating(false);
                        }
                    }
                }
            ]
        );
    };

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, styles.centerContainer]}>
                <ActivityIndicator size="large" color={colors.green()} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Icon name="arrow-left" size={24} color={colors.black()} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Edit Product</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* Image Upload Section */}
                <View style={styles.imageSection}>
                    <TouchableOpacity
                        style={styles.imageUpload}
                        onPress={selectImage}
                    >
                        {formData.image ? (
                            <Image
                                source={{ uri: formData.image.uri }}
                                style={styles.imagePreview}
                                resizeMode="cover"
                            />
                        ) : (
                            <View style={styles.imagePlaceholder}>
                                <Icon name="image-plus" size={40} color={colors.gray()} />
                                <Text style={styles.uploadText}>Change Product Image</Text>
                                <Text style={styles.uploadHint}>Recommended size: 800x800px</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                    {formData.image && (
                        <TouchableOpacity
                            style={styles.changeImageButton}
                            onPress={selectImage}
                        >
                            <Text style={styles.changeImageText}>Change Image</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Form Section */}
                <View style={styles.formSection}>
                    {/* Product Name */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Product Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. Premium Cotton T-Shirt"
                            value={formData.name}
                            onChangeText={(text) => setFormData({ ...formData, name: text })}
                        />
                    </View>

                    {/* Price and Category Row */}
                    <View style={styles.row}>
                        <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                            <Text style={styles.label}>Price ($)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="0.00"
                                keyboardType="numeric"
                                value={formData.price}
                                onChangeText={(text) => setFormData({ ...formData, price: text })}
                            />
                        </View>

                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <Text style={styles.label}>Category</Text>
                            <View style={styles.categoryInput}>
                                <TextInput
                                    style={[styles.input, { paddingLeft: 40 }]}
                                    placeholder="Select"
                                    value={formData.category}
                                    onChangeText={(text) => setFormData({ ...formData, category: text })}
                                />
                                <Icon
                                    name="chevron-down"
                                    size={20}
                                    color={colors.darkGray()}
                                    style={styles.categoryIcon}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Stock */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Stock Quantity</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter available stock"
                            keyboardType="numeric"
                            value={formData.stock}
                            onChangeText={(text) => setFormData({ ...formData, stock: text })}
                        />
                    </View>

                    {/* Description */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={styles.textArea}
                            placeholder="Describe your product..."
                            multiline
                            numberOfLines={4}
                            value={formData.description}
                            onChangeText={(text) => setFormData({ ...formData, description: text })}
                        />
                    </View>
                </View>

                {/* Update Button */}
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                    disabled={updating}
                >
                    {updating ? (
                        <ActivityIndicator color={colors.white()} />
                    ) : (
                        <Text style={styles.submitText}>Update Product</Text>
                    )}
                </TouchableOpacity>

                {/* Delete Button */}
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDelete}
                    disabled={updating}
                >
                    <Text style={styles.deleteText}>Delete Product</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white(),
    },
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        paddingBottom: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 10,
    },
    backButton: {
        padding: 5,
    },
    title: {
        fontSize: 20,
        fontFamily: fontType['ms-SemiBold'],
        color: colors.black(),
    },
    imageSection: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    imageUpload: {
        width: '100%',
        height: 200,
        backgroundColor: colors.lightGray(0.2),
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.lightGray(0.5),
        borderStyle: 'dashed',
    },
    imagePlaceholder: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    imagePreview: {
        width: '100%',
        height: '100%',
    },
    uploadText: {
        marginTop: 10,
        color: colors.darkGray(),
        fontFamily: fontType['ms-Medium'],
        fontSize: 16,
    },
    uploadHint: {
        color: colors.gray(),
        fontFamily: fontType['ms-Regular'],
        fontSize: 12,
        marginTop: 5,
    },
    changeImageButton: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    changeImageText: {
        color: colors.green(),
        fontFamily: fontType['ms-Medium'],
    },
    formSection: {
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 8,
        fontFamily: fontType['ms-Medium'],
        color: colors.darkGray(),
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.lightGray(),
        borderRadius: 8,
        padding: 12,
        fontFamily: fontType['ms-Regular'],
        backgroundColor: colors.white(),
        fontSize: 15,
    },
    categoryInput: {
        position: 'relative',
    },
    categoryIcon: {
        position: 'absolute',
        left: 12,
        top: 12,
    },
    textArea: {
        height: 120,
        borderWidth: 1,
        borderColor: colors.lightGray(),
        borderRadius: 8,
        padding: 12,
        textAlignVertical: 'top',
        fontFamily: fontType['ms-Regular'],
        fontSize: 15,
    },
    submitButton: {
        backgroundColor: colors.green(),
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        elevation: 2,
    },
    submitText: {
        color: colors.white(),
        fontFamily: fontType['ms-SemiBold'],
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: colors.red(0.1),
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.red(),
    },
    deleteText: {
        color: colors.red(),
        fontFamily: fontType['ms-SemiBold'],
        fontSize: 16,
    },
});

export default EditProduct;