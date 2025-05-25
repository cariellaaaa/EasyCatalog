import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { categories } from '../constant/data';
import colors from '../theme/colors';
import fontType from '../theme/fonts';

const CategoryItem = ({ item, onPress, color }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { borderColor: color }]}>
        <Text style={[styles.title, { color }]}>{item.name}</Text>
    </TouchableOpacity>
);

const CategoryList = () => {
    const [selected, setSelected] = useState(1);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <Text style={styles.seeAll}>See All</Text>
            </View>
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CategoryItem
                        item={item}
                        onPress={() => setSelected(item.id)}
                        color={item.id === selected ? colors.green() : '#888'}
                    />
                )}
                contentContainerStyle={styles.list}
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
    list: {
        gap: 15,
    },
    item: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        gap: 5,
    },
    title: {
        fontFamily: fontType['ms-Medium'],
    },
});

export default CategoryList;