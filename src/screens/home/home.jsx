import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  FlatList, 
  Dimensions,
  Image 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, fontType } from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryItem from '../../../components/CategoryItem';
import ProductCard from '../../../components/ProductCard';
import { categories, products, recommended } from '../../../data';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  // Fungsi untuk menampilkan section horizontal
  // PROPS: Mengirim data melalui props ke komponen CategoryItem atau menampilkan item dengan gambar
  const navigation = useNavigation();
  const renderHorizontalSection = (title, data, isCategory = false) => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {data.map((item, index) => (
          isCategory ? (
            <CategoryItem 
              key={item} 
              item={item} 
              isFirst={index === 0} 
              isLast={index === data.length - 1} 
            />
          ) : (
            <TouchableOpacity
              key={item.id}
              style={styles.horizontalCard}
            >
              {/* Jika item memiliki properti image, tampilkan gambarnya */}
              {item.image ? (
                <Image 
                  source={item.image} 
                  style={styles.horizontalImage} 
                />
              ) : (
                <View style={styles.horizontalImage} />
              )}
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </TouchableOpacity>
          )
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.mainHeader}>
        <Text style={styles.appTitle}>EasyCatalog</Text>
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={() => navigation.navigate('Search')} 
        >
        <Icon name="magnify" size={24} color={colors.green()} />
      </TouchableOpacity>

      </View>

      {/* Main Scroll */}
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Promo Section */}
        <View style={styles.promoContainer}>
          <Text style={styles.offerText}>25% Off on ORIFLAME</Text>
          <Text style={styles.subText}>Committees Produces</Text>
          <TouchableOpacity style={styles.getNowButton}>
            <Text style={styles.buttonText}>Get Now</Text>
          </TouchableOpacity>
        </View>

        {/* Categories Section */}
        {renderHorizontalSection('Categories', categories, true)}

        {/* Recommended Section */}
        {renderHorizontalSection('Recommended', recommended)}

        {/* All Products Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All Products</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <FlatList
            data={products}
            numColumns={2}
            // PROPS: Mengirim data produk ke komponen ProductCard
            renderItem={({ item }) => <ProductCard product={item} />}
            scrollEnabled={false}
            contentContainerStyle={styles.productGrid}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white(),
    borderBottomWidth: 1,
    borderBottomColor: colors.cream(),
    elevation: 3,
  },
  appTitle: {
    fontFamily: fontType['ms-ExtraBold'],
    fontSize: 24,
    color: colors.green(),
    letterSpacing: 1,
  },
  searchButton: {
    padding: 10,
    backgroundColor: colors.cream(0.3),
    borderRadius: 20,
  },
  promoContainer: {
    padding: 20,
    backgroundColor: colors.peach(),
    margin: 20,
    borderRadius: 20,
  },
  offerText: {
    fontFamily: fontType['ms-Bold'],
    fontSize: 24,
    color: colors.white(),
    marginBottom: 8,
  },
  subText: {
    fontFamily: fontType['ms-Regular'],
    fontSize: 16,
    color: colors.white(0.9),
    marginBottom: 20,
  },
  getNowButton: {
    backgroundColor: colors.green(),
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fontType['ms-Bold'],
    color: colors.white(),
    fontSize: 18,
  },
  sectionContainer: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: fontType['ms-SemiBold'],
    fontSize: 20,
    color: colors.green(),
  },
  seeAll: {
    fontFamily: fontType['ms-Medium'],
    fontSize: 16,
    color: colors.green(0.8),
  },
  horizontalList: {
    paddingVertical: 10,
  },
  horizontalCard: {
    width: width * 0.4,
    backgroundColor: colors.white(),
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    elevation: 3,
  },
  horizontalImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  productGrid: {
    paddingHorizontal: 15,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  productName: {
    fontFamily: fontType['ms-SemiBold'],
    fontSize: 16,
    color: colors.green(),
  },
  productPrice: {
    fontFamily: fontType['ms-Medium'],
    fontSize: 14,
    color: colors.peach(),
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: colors.white(),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: colors.cream(),
  },
  scrollContainer: {
    paddingBottom: 100,
  },
});

export default HomeScreen;
