import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fontType } from '../src/theme';

// PROPS: Menerima data kategori melalui props: item, isFirst, dan isLast
const CategoryItem = ({ item, isFirst, isLast }) => {
  return (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        isFirst && { marginLeft: 24 },
        isLast && { marginRight: 24 }
      ]}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: colors.cream(0.1),
    marginRight: 10,
    marginVertical: 5,
  },
  categoryText: {
    fontFamily: fontType['ms-Medium'],
    color: colors.green(),
    fontSize: 14,
  },
});

export default CategoryItem;
