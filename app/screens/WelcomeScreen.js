import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={ styles.background } source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={ styles.loginButton }>
                <View>
                    <Text style={styles.text}>Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={ styles.registerButton }>
                <View>
                    <Text style={styles.text}>Register</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 120,
        backgroundColor: colors.primary,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        borderWidth: 5,
        borderRadius: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 120,
        backgroundColor: colors.secondary,
        borderWidth: 2,
        borderTopWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 20
    }
});

export default WelcomeScreen;