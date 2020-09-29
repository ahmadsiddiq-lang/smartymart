/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { bgBlack2, fontBlack1, borderBlack2, MainColor, fontWhite } from '../../assets/colors';
import { sizeWidth, sizeFont, sizeHeight } from '../../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ProductList extends Component {

    render() {
        const { navigation, Qty, handleQtyPlus, handleQtyMinu, stateDataProduct, handleProduct } = this.props;
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
                                        {item.status === true ?
                                            <View style={styles.BoxQty}>
                                                <TouchableOpacity onPress={() => handleQtyMinu(item.id, item.harga)} activeOpacity={0.6}>
                                                    <Ionicons name="remove" color={MainColor} size={sizeFont(4)} style={{ paddingHorizontal: 8 }} />
                                                </TouchableOpacity>
                                                {/* <TextInput selectionColor={MainColor} keyboardType="numeric" style={{
                                                    padding: 0,
                                                    minWidth: sizeWidth(5),
                                                    maxWidth: sizeWidth(15),
                                                    textAlign: 'center',
                                                }} /> */}
                                                <Text>{Qty[0][item.id]}</Text>
                                                <TouchableOpacity onPress={() => handleQtyPlus(item.id, item.harga)} activeOpacity={0.6}>
                                                    <Ionicons name="add" color={MainColor} size={sizeFont(4)} style={{ paddingHorizontal: 8 }} />
                                                </TouchableOpacity>
                                            </View> :
                                            <TouchableOpacity onPress={() => handleProduct(item, index)} activeOpacity={0.6} style={styles.BtnTambah}>
                                                <Ionicons name="add" size={sizeFont(5)} color={fontWhite} />
                                                <Text style={{ color: fontWhite, fontSize: sizeFont(3.3) }}>Tambah</Text>
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
        paddingHorizontal: 10,
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
