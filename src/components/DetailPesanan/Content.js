/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bgBlack1, bgBlack2, borderBlack3, fontBlack1, fontWhite, MainColor } from '../../assets/colors';
import { sizeFont, sizeWidth } from '../../assets/responsive';
import { Poppins } from '../../assets/fonts/Poppins';

export default function Content({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Box}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 5 }}>Toko</Text>
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
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: sizeFont(3.3) }}>Agen Smarty Mart</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Ionicons name="location" size={sizeFont(4)} color={bgBlack1} />
                            <Text style={{ marginLeft: 10, fontSize: sizeFont(3), color: fontBlack1 }}>650 M - Kemayoran</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Line} />
            <View style={styles.Box}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 5 }}>Pesanan</Text>
                <View style={styles.ListProduct}>
                    <Image style={styles.Image} source={require('../../assets/images/Product/Produk3.png')} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: sizeFont(3.3) }}>Beras Setra Ramos Cap Topi Kaki</Text>
                        <Text style={{ fontSize: sizeFont(3.3) }}>Rp. 65.000</Text>
                        <Text style={{ fontSize: sizeFont(3), color: fontBlack1 }}>Qty x1</Text>
                    </View>
                </View>
                <View style={styles.ListProduct}>
                    <Image style={styles.Image} source={require('../../assets/images/Product/Produk1.png')} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: sizeFont(3.3) }}>Minyak Goreng Tropical</Text>
                        <Text style={{ fontSize: sizeFont(3.3) }}>Rp. 65.000</Text>
                        <Text style={{ fontSize: sizeFont(3), color: fontBlack1 }}>Qty x1</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 10,
                    alignItems: 'center',
                }}>
                    <TouchableOpacity activeOpacity={0.6} style={{
                        flexDirection: 'row',
                        padding: 5,
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{ color: MainColor, marginRight: 20, fontSize: sizeFont(3.3) }}>+3 Product Lainnya</Text>
                        <Ionicons name="caret-down" size={sizeFont(5)} color={MainColor} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Line} />
            <View style={styles.Box}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 5 }}>Pesanan</Text>
                    <TouchableOpacity activeOpacity={0.6} style={{ paddingHorizontal: 10 }}>
                        <Text style={{ color: MainColor }}>Ubah</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ resizeMode: 'contain', height: sizeWidth(8) }} source={require('../../assets/images/Pembayaran/ovo.png')} />
                    <Text style={{ marginLeft: 5, fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>OVO Cash</Text>
                </View>
            </View>
            <View style={styles.Line} />
            <View style={styles.Box}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 5 }}>Pesanan</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: sizeFont(3.3), marginBottom: 5 }}>Subtotal (23 Produk)</Text>
                    <Text style={{ fontSize: sizeFont(3.3) }}>Rp. 450.000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: sizeFont(3.3), marginBottom: 5 }}>Promo</Text>
                    <Text style={{ fontSize: sizeFont(3.3), color: MainColor }}>- Rp. 50.000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: sizeFont(3.3), marginBottom: 5 }}>Ongkos Kirim</Text>
                    <Text style={{ fontSize: sizeFont(3.3) }}>Rp. 0</Text>
                </View>
            </View>
            <View style={styles.Line} />
            <View style={styles.Box}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: sizeFont(3.5), marginBottom: 5 }}>Total Bayar</Text>
                    <Text style={{ fontSize: sizeFont(3.5) }}>Rp. 400.000</Text>
                </View>
                <TouchableOpacity activeOpacity={0.6} style={styles.BtnBayar}>
                    <Text style={{ color: fontWhite, fontSize: sizeFont(3.5) }}>Bayar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Box: {
        paddingHorizontal: 20,
    },
    Line: {
        height: 5,
        backgroundColor: bgBlack2,
        marginVertical: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(10),
        height: sizeWidth(15),
    },
    ListProduct: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: borderBlack3,
        paddingBottom: 10,
        marginVertical: 5,
    },
    BtnBayar: {
        backgroundColor: MainColor,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        marginVertical: 20,
    },
});
