/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { borderBlack2, fontBlack1, MainColor } from '../../assets/colors';
import { sizeWidth, sizeFont } from '../../assets/responsive';

const data = [
    { image: require('../../assets/images/Product/Produk1.png') },
    { image: require('../../assets/images/Product/Produk2.png') },
    { image: require('../../assets/images/Product/Produk3.png') },
    { image: require('../../assets/images/Product/Produk4.png') },
    { image: require('../../assets/images/Product/Produk5.png') },
    { image: require('../../assets/images/Product/Produk6.png') },
];

export default function Content() {
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginVertical: 10 }}>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={styles.ListContent}>
                                    <View style={styles.Head}>
                                        <Text style={{ fontSize: sizeFont(3) }}>Pesanan diproses</Text>
                                    </View>
                                    <View style={styles.Resi}>
                                        <Text style={{ fontSize: sizeFont(3.3) }}>INV/09234732/T0001</Text>
                                        <Text style={{ fontSize: sizeFont(2.8), color: fontBlack1 }}>09 September 2020</Text>
                                    </View>
                                    <View style={styles.ItemContent}>
                                        <Image style={styles.Image} source={item.image} />
                                        <View style={styles.ItemTetx}>
                                            <Text style={{ fontSize: sizeFont(3.5) }}>Indomie Soto Ayam</Text>
                                            <Text style={{ fontSize: sizeFont(3.3), color: MainColor }}>+14 Product lainnya</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: sizeFont(3.3) }}>Total belanja</Text>
                                                <Text style={{ fontSize: sizeFont(3.5), color: MainColor }}>Rp. 317.000</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 20,
        // marginTop: 10,
        flex: 1,
    },
    ListContent: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: borderBlack2,
        marginVertical: 10,
    },
    Head: {
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#ffd1e9',
    },
    Resi: {
        borderBottomWidth: 0.7,
        borderColor: borderBlack2,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    ItemContent: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(13),
    },
    ItemTetx: {
        marginLeft: 15,
        // borderWidth: 1,
        flex: 2,
    },
});
