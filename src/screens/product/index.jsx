import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
// import PromoBanner from '../../components/PromoBanner';
// import CategoryList from '../../components/CategoryList';
// import RecommendedList from '../../components/RecommendedList';
import ProductGrid from '../../components/ProductGrid';

import colors from '../../theme/colors';
import fontType from '../../theme/fonts';

const ProductScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* <PromoBanner /> */}
                {/* <CategoryList /> */}
                {/* <RecommendedList /> */}
                <ProductGrid />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingBottom: 24,
    },
});

export default ProductScreen;