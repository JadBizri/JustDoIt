import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/shoes.jpg')} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})

export default ViewImageScreen;