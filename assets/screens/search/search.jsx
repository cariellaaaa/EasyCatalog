import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontType } from '../../src/theme';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>
      <Text style={styles.text}>Search functionality will be implemented here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white(),
  },
  title: {
    fontFamily: fontType['ms-Bold'],
    fontSize: 24,
    color: colors.green(),
    marginBottom: 10,
  },
  text: {
    fontFamily: fontType['ms-Regular'],
    fontSize: 16,
    color: colors.green(0.7),
  },
});

export default Search;