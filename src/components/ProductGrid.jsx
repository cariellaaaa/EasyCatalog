import React, { useRef, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';
import { products } from '../constant/data';
import colors from '../theme/colors';
import fontType from '../theme/fonts';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const ProductItem = ({ item, index }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateYAnim = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                delay: index * 100,
                useNativeDriver: true,
            }),
            Animated.timing(translateYAnim, {
                toValue: 0,
                duration: 600,
                delay: index * 100,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            })
        ]).start();
    }, [fadeAnim, translateYAnim, index]);

    return (
        <AnimatedTouchable
            style={[
                styles.item,
                {
                    opacity: fadeAnim,
                    transform: [{ translateY: translateYAnim }]
                }
            ]}
            activeOpacity={0.7}
        >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </AnimatedTouchable>
    );
};

export const ProductGrid = () => {
    const scaleAnim = useRef(new Animated.Value(0.9)).current;

    useEffect(() => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
        }).start();
    }, [scaleAnim]);

    return (
        <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>All Products</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={products}
                numColumns={2}
                columnWrapperStyle={styles.grid}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => <ProductItem item={item} index={index} />}
                scrollEnabled={false}
            />
        </Animated.View>
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