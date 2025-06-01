// src/screens/ProductDetail.jsx
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';
import fontType from '../../theme/fonts';
import axios from 'axios';

const ProductDetail = ({ route, navigation }) => {
    const { product } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Icon name="arrow-left" size={24} color={colors.black()} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Product Detail</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* Product Image */}
                <Image
                    source={{ uri: product.image || 'https://placehold.co/400' }}
                    style={styles.productImage}
                    resizeMode="cover"
                />

                {/* Product Info */}
                <View style={styles.infoSection}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>${product.price}</Text>

                    <View style={styles.metaContainer}>
                        <View style={styles.metaItem}>
                            <Icon name="tag-outline" size={18} color={colors.darkGray()} />
                            <Text style={styles.metaText}>{product.category}</Text>
                        </View>
                        <View style={styles.metaItem}>
                            <Icon name="package-variant" size={18} color={colors.darkGray()} />
                            <Text style={styles.metaText}>{product.stock} in stock</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Floating Edit Button */}
            <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('EditProduct', { productId: product.id })}
            >
                <Icon name="pencil" size={24} color={colors.white()} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white(),
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
    productImage: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },
    infoSection: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    productName: {
        fontSize: 22,
        fontFamily: fontType['ms-SemiBold'],
        color: colors.black(),
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 20,
        fontFamily: fontType['ms-Medium'],
        color: colors.green(),
        marginBottom: 20,
    },
    metaContainer: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 20,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    metaText: {
        fontSize: 14,
        color: colors.darkGray(),
        fontFamily: fontType['ms-Regular'],
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: fontType['ms-SemiBold'],
        color: colors.black(),
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        lineHeight: 22,
        color: colors.darkGray(),
        fontFamily: fontType['ms-Regular'],
    },
    editButton: {
        position: 'absolute',
        right: 20,
        bottom: 80, // Adjust based on your tab bar height
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.green(),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: colors.black(),
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default ProductDetail;