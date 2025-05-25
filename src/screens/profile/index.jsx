import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            {/* Profile Header */}
            <View style={styles.profileHeader}>
                <View style={styles.profileStats}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>24</Text>
                        <Text style={styles.statLabel}>Total Shopping</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>343</Text>
                        <Text style={styles.statLabel}>Total Purchase</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>8</Text>
                        <Text style={styles.statLabel}>Product Caceled</Text>
                    </View>
                </View>
            </View>

            {/* Profile Options */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionItem}>
                    <Text style={styles.optionText}>Edit profile</Text>
                    <Text style={styles.optionArrow}>{'>'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                    <Text style={styles.optionText}>Address</Text>
                    <Text style={styles.optionArrow}>{'>'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                    <Text style={styles.optionText}>Settings</Text>
                    <Text style={styles.optionArrow}>{'>'}</Text>
                </TouchableOpacity>
            </View>

            {/* Upgrade Banner */}
            <View style={styles.upgradeBanner}>
                <Text style={styles.upgradeText}>
                    Unlock all features, and get access to premium features
                </Text>
                <TouchableOpacity style={styles.upgradeButton}>
                    <Text style={styles.upgradeButtonText}>Upgrade to Pro</Text>
                </TouchableOpacity>
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    profileHeader: {
        marginBottom: 30,
    },
    profileStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    statItem: {
        alignItems: 'center',
        width: '30%',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    optionsContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    optionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionText: {
        fontSize: 16,
    },
    optionArrow: {
        fontSize: 20,
        color: '#999',
    },
    upgradeBanner: {
        backgroundColor: '#e8f4ff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    upgradeText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
        lineHeight: 20,
    },
    upgradeButton: {
        backgroundColor: '#0066ff',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    upgradeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    logoutButton: {
        padding: 15,
        alignItems: 'center',
    },
    logoutText: {
        color: '#ff4444',
        fontSize: 16,
    },
});

export default ProfileScreen;