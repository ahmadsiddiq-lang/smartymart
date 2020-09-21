/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { bgBlack2, fontBlack1, fontWhite, MainColor } from '../../assets/colors';
import { sizeWidth, sizeFont, sizeHeight } from '../../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const dataProduct = [
    { image: require('../../assets/images/Product/Produk1.png') },
    { image: require('../../assets/images/Product/Produk2.png') },
    { image: require('../../assets/images/Product/Produk3.png') },
    { image: require('../../assets/images/Product/Produk4.png') },
    { image: require('../../assets/images/Product/Produk5.png') },
    { image: require('../../assets/images/Product/Produk6.png') },
    { image: require('../../assets/images/Product/Produk4.png') },
    { image: require('../../assets/images/Product/Produk5.png') },
    { image: require('../../assets/images/Product/Produk6.png') },
];

export default function ProductList({ navigation }) {
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    dataProduct.map((item, index) => {
                        return (
                            <View key={index} style={styles.BoxList}>
                                <View style={styles.BoxImage}>
                                    <Image style={styles.Image} source={item.image} />
                                </View>
                                <View style={{ flex: 2, paddingLeft: 15 }}>
                                    <Text style={{ fontSize: sizeFont(3.3) }}>Minyak Goreng Tropical</Text>
                                    <Text style={{ fontSize: sizeFont(3), color: fontBlack1 }}>2 Lt / Pcs</Text>
                                    <Text style={{ fontSize: sizeFont(3.3) }}>Rp. 24.000</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <TouchableOpacity activeOpacity={0.6} style={styles.BtnTambah}>
                                        <Ionicons name="add" size={sizeFont(5)} color={fontWhite} />
                                        <Text style={{ color: fontWhite, marginLeft: 5 }}>Tambah</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 20,
        marginTop: 10,
        flex: 1,
    },
    BoxList: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: bgBlack2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    BoxImage: {
        // borderWidth: 1,
        overflow: 'hidden',
        width: sizeWidth(10),
        height: sizeWidth(20),
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(10),
        height: sizeWidth(20),
    },
    BtnTambah: {
        backgroundColor: MainColor,
        marginBottom: sizeHeight(3),
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        flexDirection: 'row',
        paddingLeft: 10,
    },
});
