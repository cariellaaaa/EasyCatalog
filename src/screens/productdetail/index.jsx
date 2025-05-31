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
                {/* Header dengan tombol back dan wishlist */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Icon name="arrow-left" size={24} color={colors.black()} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Product Detail</Text>
                    <TouchableOpacity style={styles.wishlistButton}>
                        <Icon name="heart-outline" size={24} color={colors.black()} />
                    </TouchableOpacity>
                </View>

                {/* Konten produk */}
                <Image
                    source={product.image}
                    style={styles.productImage}
                    resizeMode="cover"
                />

                {/* Info produk */}
                <View style={styles.infoSection}>
                    <View style={styles.titleRow}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>${product.price}</Text>
                    </View>

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

            {/* Footer dengan tombol beli */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.cartButton}>
                    <Icon name="cart-outline" size={20} color={colors.white()} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
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
    wishlistButton: {
        padding: 5,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
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
    footer: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white(),
        borderTopWidth: 1,
        borderTopColor: colors.lightGray(),
    },
    cartButton: {
        backgroundColor: colors.green(),
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    buyButton: {
        flex: 1,
        backgroundColor: colors.green(),
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyButtonText: {
        color: colors.white(),
        fontFamily: fontType['ms-SemiBold'],
        fontSize: 16,
    },
});

export default ProductDetail;
