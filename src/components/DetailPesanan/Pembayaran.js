/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { fontBlack1, bgBlack1, borderBlack3, fontWhite, MainColor, fontBlack } from '../../assets/colors';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeHeight, sizeFont, sizeWidth } from '../../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Instan = [
    { title: 'OVO Cash', image: require('../../assets/images/Pembayaran/ovo.png') },
    { title: 'Gopay', image: require('../../assets/images/Pembayaran/gopay.png') },
    { title: 'Dana', image: require('../../assets/images/Pembayaran/dana.png') },
];

const Transfer = [
    { title: 'Bank BNI', image: require('../../assets/images/Pembayaran/bni.png') },
    { title: 'Bank BRI', image: require('../../assets/images/Pembayaran/bri.png') },
    { title: 'Bank BCA', image: require('../../assets/images/Pembayaran/bca.png') },
    { title: 'Bank Mandiri', image: require('../../assets/images/Pembayaran/mandiri.png') },
];

export default function Pembayaran() {
    return (
        <View style={styles.Container}>
            <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Pilih Metode Pembayaran</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Box}>
                    <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium, marginBottom: 10 }}>E-Wallet</Text>
                    <TouchableOpacity activeOpacity={0.6} style={styles.ItemBox}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{
                                width: sizeWidth(10),
                                height: sizeWidth(10),
                                borderRadius: sizeWidth(10) / 2,
                                backgroundColor: MainColor,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{ color: fontWhite, fontSize: sizeFont(5), marginTop: 5, fontFamily: Poppins.Bold }}>S</Text>
                            </View>
                            <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                                <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Saldo</Text>
                                <Text style={{ fontSize: sizeFont(3.3), color: fontBlack, marginLeft: 20 }}>Rp. 379.000</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(5.5)} color={bgBlack1} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium, marginVertical: 15 }}>Pembayaran Instan</Text>
                    {
                        Instan.map((item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.6} key={index} style={styles.ItemBox}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={styles.Image} source={item.image} />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{ fontSize: sizeFont(3.3) }}>{item.title}</Text>
                                        </View>
                                    </View>
                                    <Ionicons name="chevron-forward" size={sizeFont(5.5)} color={bgBlack1} />
                                </TouchableOpacity>
                            );
                        })
                    }
                    <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium, marginVertical: 15 }}>Transfer Bank</Text>
                    {
                        Transfer.map((item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.6} key={index} style={styles.ItemBox}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={styles.Image} source={item.image} />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{ fontSize: sizeFont(3.3) }}>{item.title}</Text>
                                        </View>
                                    </View>
                                    <Ionicons name="chevron-forward" size={sizeFont(5.5)} color={bgBlack1} />
                                </TouchableOpacity>
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
        // flex: 1,
        paddingHorizontal: 20,
        paddingBottom: sizeHeight(10),
    },
    Box: {
        flex: 1,
        marginTop: sizeHeight(2),
    },
    ItemBox: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: borderBlack3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingTop: 5,
        paddingVertical: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(13),
        height: sizeWidth(8),
    },
});
