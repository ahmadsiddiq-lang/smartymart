import React from 'react';
import { StyleSheet, View } from 'react-native';
import { bgWhite } from '../assets/colors';
import Header from '../components/Headers/HeaderHome';
import Banner from '../components/Home/Banner';
import ProductList from '../components/Home/ProductList';

const data = [
    { image: require('../assets/images/Banner/Banner1.png') },
    { image: require('../assets/images/Banner/Banner2.png') },
    { image: require('../assets/images/Banner/Banner1.png') },
    { image: require('../assets/images/Banner/Banner2.png') },
];

export default function Home({ Navigation }) {
    return (
        <View style={styles.Container}>
            <Header Navigation={Navigation} />
            <Banner Navigation={Navigation} data={data} />
            <ProductList Navigation={Navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
});
