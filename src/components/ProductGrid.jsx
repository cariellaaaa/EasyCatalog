import React, { useRef, useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
    Animated,
    Easing,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import fontType from '../theme/fonts';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const ProductItem = ({ item, index }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateYAnim = useRef(new Animated.Value(50)).current;
    const navigation = useNavigation();

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
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Image
                source={{ uri: item.image || 'https://placehold.co/400?text=No+Image' }}
                style={styles.image}
                onError={(e) => console.log('Failed to load image:', e.nativeEvent.error)}
                resizeMode="cover"
            />
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </AnimatedTouchable>
    );
};

export const ProductGrid = () => {
    const scaleAnim = useRef(new Animated.Value(0.9)).current;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://68346376464b49963602974c.mockapi.io/api/pruducts');
            console.log('Products data:', response.data); // Debug data
            setProducts(response.data);
            setError(null);
        } catch (err) {
            console.error('Error fetching products:', err);
            setError(err.message);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
        }).start();

        fetchProducts();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchProducts();
    };

    if (loading && !refreshing) {
        return (
            <View style={[styles.loadingContainer]}>
                <ActivityIndicator size="large" color={colors.green()} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.errorContainer]}>
                <Text style={styles.errorText}>Error: {error}</Text>
                <TouchableOpacity
                    style={styles.retryButton}
                    onPress={fetchProducts}
                >
                    <Text style={styles.retryText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

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
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No products found</Text>
                    </View>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.green()]}
                    />
                }
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
        backgroundColor: colors.lightGray(0.2),
    },
    name: {
        fontFamily: fontType['ms-SemiBold'],
        fontSize: 14,
    },
    price: {
        fontFamily: fontType['ms-Medium'],
        color: colors.peach(),
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        color: colors.red(),
        fontFamily: fontType['ms-Medium'],
        marginBottom: 10,
    },
    retryButton: {
        padding: 10,
        backgroundColor: colors.green(),
        borderRadius: 5,
    },
    retryText: {
        color: colors.white(),
        fontFamily: fontType['ms-Medium'],
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        color: colors.gray(),
        fontFamily: fontType['ms-Medium'],
    },
});

export default ProductGrid;