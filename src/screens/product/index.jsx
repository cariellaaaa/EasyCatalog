import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import ProductGrid from '../../components/ProductGrid';
import colors from '../../theme/colors';
import fontType from '../../theme/fonts';

const ProductScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <ProductGrid />
            </ScrollView>
            <View style={styles.fabContainer}>
                <TouchableOpacity
                    style={styles.fabButton}
                    onPress={() => navigation.navigate('AddProductForm')}
                >
                    <Icon name="plus" size={24} color={colors.white()} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        position: 'relative', // Needed for absolute positioning of FAB
    },
    scrollContent: {
        paddingBottom: 100, // Extra space for FAB and tab bar
    },
    fabContainer: {
        position: 'absolute',
        left: 20,
        bottom: 80, // Adjust based on your tab bar height
        zIndex: 10,
    },
    fabButton: {
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

export default ProductScreen;