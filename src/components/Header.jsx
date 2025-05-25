import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';
import fontType from '../theme/fonts';

export const Header = () => {
    return (
        <View style={styles.mainHeader}>
            <Text style={styles.appTitle}>EasyCatalog</Text>
            <TouchableOpacity style={styles.searchButton}>
                <Icon name="magnify" size={24} color={colors.green()} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.white(),
        // backgroundColor: 'ffffff',
        borderBottomWidth: 1,
        borderBottomColor: colors.cream(),
        // borderBottomColor: 'rgba(255, 193, 180, 0.3)',
        elevation: 3,
    },
    appTitle: {
        fontFamily: fontType['ms-ExtraBold'],
        fontSize: 24,
        color: colors.green(),
        // color: 'rgba(0, 112, 116, 1)',
        letterSpacing: 1,
    },
    searchButton: {
        padding: 10,
        backgroundColor: colors.cream(0.3),
        // backgroundColor: 'rgba(255, 193, 180, 0.3)',
        borderRadius: 20,
    },
});

export default Header;