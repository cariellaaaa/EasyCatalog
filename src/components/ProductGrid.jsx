import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { products } from '../constant/data';
import colors from '../theme/colors';
import fontType from '../theme/fonts';

const ProductItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
);

export const ProductGrid = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>All Products</Text>
                <Text style={styles.seeAll}>See All</Text>
            </View>
            <FlatList
                data={products}
                numColumns={2}
                columnWrapperStyle={styles.grid}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductItem item={item} />}
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: fontType['ms-Bold'],
        color: colors.green(),
    },
    seeAll: {
        color: colors.green(),
        fontFamily: fontType['ms-Medium'],
    },
    grid: {
        justifyContent: 'space-between',
        marginBottom: 15,
        gap: 15,
    },
    item: {
        width: '48%',
        gap: 8,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    name: {
        fontFamily: fontType['ms-SemiBold'],
        fontSize: 14,
    },
    price: {
        fontFamily: fontType['ms-Medium'],
        color: colors.peach(),
    },
});
export default ProductGrid;