import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainColor } from '../assets/colors';
import Header from '../components/Headers/HeaderHome';

export default function Home({ Navigation }) {
    return (
        <View style={styles.Container}>
            <Header Navigation={Navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
