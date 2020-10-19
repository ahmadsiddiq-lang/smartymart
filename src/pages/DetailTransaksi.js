import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Headers/HeaderPages';
import Content from '../components/DetailTransaksi/Content';
import { bgWhite } from '../assets/colors';

export default function DetailTransaksi({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Detail Transaksi'} />
            <Content navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
});
