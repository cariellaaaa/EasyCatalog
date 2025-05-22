import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, fontType } from '../src/theme';

// PROPS: Menerima data produk melalui props, termasuk gambar lokal (product.image)
const ProductCard = ({ product }) => {
  return (
    <View style={styles.productCard}>
      {/* Menampilkan gambar produk */}
      <Image 
        source={product.image} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: '48%',
    backgroundColor: colors.white(),
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontFamily: fontType['ms-SemiBold'],
    fontSize: 16,
    color: colors.green(),
    marginTop: 10,
  },
  productPrice: {
    fontFamily: fontType['ms-Medium'],
    fontSize: 14,
    color: colors.peach(),
    marginTop: 5,
  },
});

export default ProductCard;
