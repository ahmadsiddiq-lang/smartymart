/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { bgBlack2, fontBlack1, borderBlack2, MainColor, fontWhite } from '../../assets/colors';
import { sizeWidth, sizeFont, sizeHeight } from '../../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProductList({ navigation, handleCart, Cart, dataProduct, Qty, handleQtyPlus, handleQtyMinu }) {

    const [stateDataProduct, setDataProduct] = useState([]);
    const handleProduct = (item, index) => {
        handleCart(item);
        const newData = [];
        newData.push({ ...stateDataProduct[index], status: true });
        if (item) {
            stateDataProduct[index] = newData[0];
            // console.log(stateDataProduct);
            setDataProduct(stateDataProduct);
        } else {
            setDataProduct([]);
        }
    };

    useEffect(() => {
        setDataProduct(dataProduct);
        return () => {
            setDataProduct([]);
        };
    }, [dataProduct]);
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {stateDataProduct &&
                    stateDataProduct.map((item, index) => {
                        return (
                            <View key={index} style={styles.BoxList}>
                                <View style={styles.BoxImage}>
                                    <Image style={styles.Image} source={item.image} />
                                </View>
                                <View style={{ flex: 2, paddingLeft: 15 }}>
                                    <Text style={{ fontSize: sizeFont(3.3) }}>Minyak Goreng Tropical</Text>
                                    <Text style={{ fontSize: sizeFont(3), color: fontBlack1 }}>2 Lt / Pcs</Text>
                                    <Text style={{ fontSize: sizeFont(3.3) }}>Rp. {item.harga}</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    {item.status ?
                                        <View style={styles.BoxQty}>
                                            <TouchableOpacity onPress={() => handleQtyMinu(item.id, index)} activeOpacity={0.6}>
                                                <Ionicons name="remove" color={MainColor} size={sizeFont(4)} style={{ paddingHorizontal: 8 }} />
                                            </TouchableOpacity>
                                            {/* <TextInput selectionColor={MainColor} keyboardType="numeric" style={{
                                                padding: 0,
                                                minWidth: sizeWidth(5),
                                                maxWidth: sizeWidth(15),
                                                textAlign: 'center',
                                            }} /> */}
                                            <Text>{Qty[item.id]}</Text>
                                            <TouchableOpacity onPress={() => handleQtyPlus(item.id)} activeOpacity={0.6}>
                                                <Ionicons name="add" color={MainColor} size={sizeFont(4)} style={{ paddingHorizontal: 8 }} />
                                            </TouchableOpacity>
                                        </View> :
                                        <TouchableOpacity onPress={() => handleProduct(item, index)} activeOpacity={0.6} style={styles.BtnTambah}>
                                            <Ionicons name="add" size={sizeFont(5)} color={fontWhite} />
                                            <Text style={{ color: fontWhite, marginLeft: 5 }}>Tambah</Text>
                                        </TouchableOpacity>
                                    }
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
    BoxQty: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 8,
        borderColor: borderBlack2,
        marginBottom: 20,
    },
});
