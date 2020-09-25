/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sizeFont, sizeHeight } from '../../assets/responsive';
import { bgWhiteRGBA, fontWhite, MainColor } from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderHome({ navigation }) {
    return (
        <View style={styles.Container}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('WarungTerdekat')} style={styles.Box}>
                <Text style={{ fontSize: sizeFont(3), color: fontWhite }}>Pilih Agen</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="location" color={fontWhite} size={sizeFont(4)} />
                    <Text style={{ marginLeft: 10, fontSize: sizeFont(3.5), color: fontWhite }}>Agen Smarty Mart 1</Text>
                </View>
            </TouchableOpacity>
            <View style={[styles.Box, { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }]}>
                <TouchableOpacity activeOpacity={0.6} style={{ padding: 7, borderRadius: 100, backgroundColor: bgWhiteRGBA }}>
                    <Ionicons name="search" color={fontWhite} size={sizeFont(5)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Keranjang')} activeOpacity={0.6} style={{ padding: 7, marginLeft: 15, borderRadius: 100, backgroundColor: bgWhiteRGBA }}>
                    <Ionicons name="cart" color={fontWhite} size={sizeFont(5)} />
                    <View style={styles.Circle}>
                        <Text style={{ color: fontWhite, fontSize: sizeFont(2.3) }}>4</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    Container: {
        height: sizeHeight(8),
        backgroundColor: MainColor,
        flexDirection: 'row',
    },
    Box: {
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    Circle: {
        backgroundColor: '#3b9dff',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 12,
        height: 12,
        position: 'absolute',
        top: 5,
        right: 5,
    },
});
