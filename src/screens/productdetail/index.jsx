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
                    source={{ uri: product.image }}
                    style={styles.productImage}
                    resizeMode="cover"
                />

                {/* Product Info */}
                <View style={styles.infoSection}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>${product.price}</Text>
                    <Text style={styles.label}>Category:</Text>
                    <Text style={styles.text}>{product.category}</Text>

                    <Text style={styles.label}>Stock:</Text>
                    <Text style={styles.text}>{product.stock} pcs</Text>

                    <Text style={styles.label}>Description:</Text>
                    <Text style={styles.text}>{product.description}</Text>
                </View>
            </ScrollView>
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
        height: 250,
        borderRadius: 12,
        marginBottom: 20,
    },
    infoSection: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    productName: {
        fontSize: 22,
        fontFamily: fontType['ms-SemiBold'],
        color: colors.black(),
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 20,
        fontFamily: fontType['ms-Medium'],
        color: colors.green(),
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: colors.darkGray(),
        fontFamily: fontType['ms-Medium'],
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        fontFamily: fontType['ms-Regular'],
        color: colors.black(),
    },
});

export default ProductDetail;
