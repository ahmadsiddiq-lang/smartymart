/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { bgWhite, MainColor, borderWhite, fontWhite } from '../assets/colors';
import { sizeWidth, sizeFont } from '../assets/responsive';
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
            <View style={styles.Footer}>
                <TouchableOpacity activeOpacity={0.8} style={styles.Btn}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: fontWhite, fontSize: sizeFont(3.5) }}>6 Items</Text>
                        <View style={{ borderLeftWidth: 1, borderColor: borderWhite, marginLeft: 8, paddingLeft: 8 }}>
                            <Text style={{ color: fontWhite, fontSize: sizeFont(3.5) }}>Rp. 270.000</Text>
                        </View>
                    </View>
                    <Image style={{
                        resizeMode: 'contain',
                        width: sizeWidth(5),
                    }} source={require('../assets/images/Icons/IconKeranjangBawah.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
    Footer: {
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
    },
    Btn: {
        backgroundColor: MainColor,
        marginBottom: 10,
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});
