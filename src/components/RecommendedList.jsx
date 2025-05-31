import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { recommended } from '../constant/data';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import fontType from '../theme/fonts';

const RecommendedItem = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
    );
};

export const RecommendedList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Recommended</Text>
                <Text style={styles.seeAll}>See All</Text>
            </View>
            <FlatList
                data={recommended}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <RecommendedItem item={item} />}
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
        width: 150,
        gap: 8,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    name: {
        fontFamily: fontType['ms-SemiBold'],
        fontSize: 14,
    },
    price: {
        fontFamily: fontType['ms-medium'],
        color: colors.peach(),
    },
});

export default RecommendedList;