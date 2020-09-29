/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { MainColor, fontBlack1, borderBlack2, bgBlack2 } from '../../assets/colors';
import { sizeFont, sizeWidth } from '../../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

// const dataProduct = [
//     {
//         stor: 'Agen Smarty Mart 1', address: 'Kemayoran, Jakarta Pusat', listProduct: [
//             { image: require('../../assets/images/Product/Produk3.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
//             { image: require('../../assets/images/Product/Produk2.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
//             { image: require('../../assets/images/Product/Produk4.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
//         ],
//     },
//     {
//         stor: 'Agen Smarty Mart 1', address: 'Kemayoran, Jakarta Pusat', listProduct: [
//             { image: require('../../assets/images/Product/Produk3.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
//             { image: require('../../assets/images/Product/Produk2.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
//             { image: require('../../assets/images/Product/Produk4.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
//         ],
//     },
// ];

export default class Content extends Component {
    render() {
        const { dataProduct, idCheck, CheckActive, handleQtyProduct, Qty, handlePlus, handleMinus } = this.props;
        return (
            <View style={styles.Container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        dataProduct.map((item, index) => {
                            return (
                                <View key={index} style={styles.BoxList}>
                                    <View style={styles.BoxHead}>
                                        <TouchableOpacity
                                            onPress={() => CheckActive(index, idCheck[index].CheckBox)}
                                        >
                                            {
                                                idCheck.length > 0 &&
                                                <CheckBox
                                                    disabled={true}
                                                    value={idCheck[index].CheckBox}
                                                    tintColors={{ true: MainColor }}
                                                // onValueChange={(newValue) => CheckActive(index)}
                                                />
                                            }
                                        </TouchableOpacity>
                                        <View style={{ marginTop: 5, marginLeft: 10 }}>
                                            <Text style={{ fontSize: sizeFont(3.5) }}>Agen Smarty Mart 1</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Ionicons name="location" color={MainColor} size={sizeFont(4)} />
                                                <Text style={{ fontSize: sizeFont(3), marginLeft: 10, color: fontBlack1 }}>Kemayoran, Jakarta Pusat</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ paddingHorizontal: 20 }}>
                                        {
                                            item.listProduct.map((subItem, subIndex) => {
                                                return (
                                                    <View key={subIndex} style={styles.ListContent}>
                                                        <Image style={styles.Image} source={require('../../assets/images/Product/Produk3.png')} />
                                                        <View style={styles.BoxText}>
                                                            <Text style={{ fontSize: sizeFont(3.5) }}>Beras Setra Ramos</Text>
                                                            <Text style={{ fontSize: sizeFont(2.5), color: fontBlack1 }}>5 Kg</Text>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                <Text style={{ fontSize: sizeFont(3.3) }}>Rp. 95.000</Text>
                                                                <View style={styles.BoxQty}>
                                                                    <TouchableOpacity onPress={() => handleMinus(subItem.id)} activeOpacity={0.6}>
                                                                        <Ionicons name="remove" color={MainColor} size={sizeFont(4)} style={{ paddingHorizontal: 8 }} />
                                                                    </TouchableOpacity>
                                                                    {
                                                                        Qty[subItem.id] > 0 &&
                                                                        <TextInput defaultValue={Qty[subItem.id].toString()} selectionColor={MainColor} keyboardType="numeric" style={{
                                                                            padding: 0,
                                                                            minWidth: sizeWidth(5),
                                                                            maxWidth: sizeWidth(15),
                                                                            textAlign: 'center',
                                                                        }} />
                                                                    }
                                                                    <TouchableOpacity onPress={() => handlePlus(subItem.id)} activeOpacity={0.6}>
                                                                        <Ionicons name="add" color={MainColor} size={sizeFont(4)} style={{ paddingHorizontal: 8 }} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                );
                                            })
                                        }
                                    </View>
                                    <View style={styles.Line} />
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 15,
    },
    BoxList: {
        // paddingHorizontal: 20,
    },
    BoxHead: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    ListContent: {
        borderWidth: 1,
        borderColor: borderBlack2,
        borderRadius: 8,
        flexDirection: 'row',
        padding: 15,
        marginLeft: 8,
        marginVertical: 8,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(10),
        height: sizeWidth(13),
    },
    BoxText: {
        marginLeft: 15,
        // borderWidth: 1,
        flex: 1,
    },
    BoxQty: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 8,
        borderColor: borderBlack2,
    },
    Line: {
        height: 5,
        backgroundColor: bgBlack2,
        marginVertical: 10,
    },
});
