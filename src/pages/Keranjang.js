/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Headers/HeaderPages';
import Content from '../components/Keranjang/Content';
import CheckBox from '@react-native-community/checkbox';
import { bgWhite, borderBlack2, MainColor, fontWhite } from '../assets/colors';
import { sizeFont, sizeHeight } from '../assets/responsive';


export default function Keranjang({ navigation }) {

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [toggleCheck, setToggleCheck] = useState(false);

    const handleCheck = () => {
        setToggleCheckBox(e => !e);
        if (toggleCheckBox === false) {
            setToggleCheck(true);
        }
    };

    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Keranjang'} />
            <View style={styles.Head}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        tintColors={{ true: MainColor }}
                        onValueChange={(newValue) => handleCheck()}
                    />
                    <Text style={{ marginLeft: 10, fontSize: sizeFont(3.3) }}>Pilih semua produk </Text>
                </View>
                <TouchableOpacity activeOpacity={0.6} style={styles.Btn}>
                    <Text style={{ color: MainColor, fontSize: sizeFont(3.5) }}>Hapus</Text>
                </TouchableOpacity>
            </View>
            <Content navigation={navigation} setToggleCheck={setToggleCheck} toggleCheck={toggleCheck} />
            <View style={styles.Footer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: sizeFont(3.5) }}>Sub Total</Text>
                    <Text style={{ fontSize: sizeFont(3.5), color: MainColor }}>Rp. 485.000</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('DetailPesanan')} activeOpacity={0.6} style={styles.BtnBeli}>
                    <Text style={{ color: fontWhite }}>Beli</Text>
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
    Head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
    },
    Btn: {
        padding: 7,
        // borderWidth: 1,
        justifyContent: 'center',
    },
    Footer: {
        backgroundColor: bgWhite,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: borderBlack2,
    },
    BtnBeli: {
        backgroundColor: MainColor,
        alignItems: 'center',
        paddingVertical: sizeFont(2),
        borderRadius: 10,
        marginTop: sizeHeight(1.2),
    },
});
