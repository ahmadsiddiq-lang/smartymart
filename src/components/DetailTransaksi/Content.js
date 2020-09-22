/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { borderBlack3, fontBlack, fontBlack1, MainColor, bgBlack2 } from '../../assets/colors';
import { sizeFont, sizeWidth } from '../../assets/responsive';
import { Poppins } from '../../assets/fonts/Poppins';
import Ionicons from 'react-native-vector-icons/Ionicons';



const product = [
    { title: 'Beras Setra Ramos Cap Topi Kaki', image: require('../../assets/images/Product/Produk3.png') },
    { title: 'Minyak Goreng Tropical', image: require('../../assets/images/Product/Produk1.png') },
    { title: 'Beras Setra Ramos Cap Topi Kaki', image: require('../../assets/images/Product/Produk2.png') },
    { title: 'Beras Setra Ramos Cap Topi Kaki', image: require('../../assets/images/Product/Produk4.png') },
    { title: 'Beras Setra Ramos Cap Topi Kaki', image: require('../../assets/images/Product/Produk5.png') },
];


export default function Content() {
    const [dataProduct, setData] = useState([]);
    const [active, setActive] = useState(true);

    const hanldeProduct = () => {
        const newProduct = product.slice(0, 2);
        setData(newProduct);
    };

    useEffect(() => {
        hanldeProduct();
        return () => {
            setData([]);
        };
    }, []);
    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.Box}>
                    <View style={styles.BoxLIst}>
                        <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Status</Text>
                        <Text style={{ fontSize: sizeFont(3.3), color: MainColor }}>Pesanan diproses</Text>
                    </View>
                    <View style={styles.BoxLIst}>
                        <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Tanggal Transaksi</Text>
                        <Text style={{ fontSize: sizeFont(3.3), color: fontBlack }}>Sel, 24 Maret 2020 10:15:29</Text>
                    </View>
                    <View style={styles.BoxLIst}>
                        <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>INV/092834092/TR0001</Text>
                        <Text style={{ fontSize: sizeFont(3.3), color: MainColor }}>Lihat</Text>
                    </View>
                </View>
                <View style={styles.Line} />
                <View style={styles.Box}>
                    <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 5 }}>Pesanan</Text>
                    {
                        active ? dataProduct.map((item, index) => {
                            return (
                                <View key={index} style={styles.ListProduct}>
                                    <Image style={styles.Image} source={item.image} />
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ fontSize: sizeFont(3.3) }}>{item.title}</Text>
                                        <Text style={{ fontSize: sizeFont(3.3) }}>Rp. 65.000</Text>
                                        <Text style={{ fontSize: sizeFont(3), color: fontBlack1 }}>Qty x1</Text>
                                    </View>
                                </View>
                            );
                        }) :
                            product.map((item, index) => {
                                return (
                                    <View key={index} style={styles.ListProduct}>
                                        <Image style={styles.Image} source={item.image} />
                                        <View style={{ marginLeft: 15 }}>
                                            <Text style={{ fontSize: sizeFont(3.3) }}>{item.title}</Text>
                                            <Text style={{ fontSize: sizeFont(3.3) }}>Rp. 65.000</Text>
                                            <Text style={{ fontSize: sizeFont(3), color: fontBlack1 }}>Qty x1</Text>
                                        </View>
                                    </View>
                                );
                            })
                    }
                    <View style={{
                        marginTop: 10,
                        alignItems: 'center',
                    }}>
                        {
                            active ?
                                <TouchableOpacity onPress={() => setActive(e => !e)} activeOpacity={0.6} style={{
                                    flexDirection: 'row',
                                    padding: 5,
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{ color: MainColor, marginRight: 20, fontSize: sizeFont(3.3) }}>+{product.length - 2} Product Lainnya</Text>
                                    <Ionicons name="caret-down" size={sizeFont(5)} color={MainColor} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => setActive(e => !e)} activeOpacity={0.6} style={{
                                    flexDirection: 'row',
                                    padding: 5,
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{ color: MainColor, marginRight: 20, fontSize: sizeFont(3.3) }}>+{product.length - 2} Product Lainnya</Text>
                                    <Ionicons name="caret-up" size={sizeFont(5)} color={MainColor} />
                                </TouchableOpacity>
                        }
                    </View>
                </View>
                <View style={styles.Line} />
                <View style={styles.Box}>
                    <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 5 }}>Informasi Pengiriman</Text>
                    <View>
                        <View style={styles.ListPengiriman}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Nama Agen</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: sizeFont(3.3) }}>Agen Smarty 1</Text>
                            </View>
                        </View>
                        <View style={styles.ListPengiriman}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Kurir Pengiriman</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: sizeFont(3.3) }}>Grab Same Day</Text>
                            </View>
                        </View>
                        <View style={styles.ListPengiriman}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>No. Resi</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: sizeFont(3.3) }}>000190238092</Text>
                            </View>
                        </View>
                        <View style={styles.ListPengiriman}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Alamat</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: sizeFont(3.3) }} numberOfLines={3}>Toko ABC(08128747947) The Mansion Bougenville, Jl. Trembesi Blok D4, Bandar Baru, Kompleks Kemayoran RW 10, Pademangan Timur, 14410. Jakarta Utara</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.Line} />
                <View style={styles.Box}>
                    <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 5 }}>Informasi Pembayaran</Text>
                    <View style={styles.BoxLIstPembayaran}>
                        <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Metode Pembayaran</Text>
                        <Text style={{ fontSize: sizeFont(3.3), color: MainColor }}>OVO Cash</Text>
                    </View>
                    <View style={styles.BoxLIstPembayaran}>
                        <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Subtotal (23 Produk)</Text>
                        <Text style={{ fontSize: sizeFont(3.5), color: fontBlack }}>Rp. 450.000</Text>
                    </View>
                    <View style={styles.BoxLIstPembayaran}>
                        <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Promo</Text>
                        <Text style={{ fontSize: sizeFont(3.5), color: MainColor }}>- Rp. 50.000</Text>
                    </View>
                    <View style={styles.BoxLIstPembayaran}>
                        <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Ongkos Kirim</Text>
                        <Text style={{ fontSize: sizeFont(3.5), color: fontBlack }}>Rp. 20.000</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingBottom: 5,
    },
    Box: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    BoxLIst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: borderBlack3,
        paddingVertical: 10,
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
    ListPengiriman: {
        flexDirection: 'row',
    },
    BoxLIstPembayaran: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,

    },
});
