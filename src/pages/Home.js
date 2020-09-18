import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainColor } from '../assets/colors';

export default function Home({ Navigation }) {
    return (
        <View style={styles.Container}>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: MainColor,
    },
});
