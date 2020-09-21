import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bgWhite } from '../assets/colors';
import Header from '../components/Headers/HeaderPages';
import Category from '../components/HistoryTransaksi/Category';
import Content from '../components/HistoryTransaksi/Content';

export default function HistoryTransaksi({ navigationD }) {
    return (
        <View style={styles.Container}>
            <Header navigationD={navigationD} title={'History Transaksi'} />
            <Category />
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
});
