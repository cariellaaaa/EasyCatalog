import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import fontType from '../theme/fonts';

// Ubah menjadi default export
const PromoBanner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>25% Off on ORIFLAME</Text>
            <Text style={styles.subtitle}>Committees Produces</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.peach(), // Tambahkan ()
        borderRadius: 15,
        padding: 20,
        margin: 20,
    },
    title: {
        fontSize: 22,
        fontFamily: fontType['ms-Bold'], // Sesuaikan dengan key yang ada
        color: colors.white(),
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: fontType['ms-Regular'], // Sesuaikan
        color: colors.white(0.9),
        marginBottom: 15,
    },
    button: {
        backgroundColor: colors.green(),
        borderRadius: 25,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white(),
        fontFamily: fontType['ms-Bold'],
        fontSize: 16,
    },
});

export default PromoBanner; // Default export