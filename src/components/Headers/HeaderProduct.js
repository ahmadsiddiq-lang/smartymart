/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sizeHeight, sizeFont } from '../../assets/responsive';
import { MainColor, fontWhite, bgWhiteRGBA, bgWhite, fontBlack2 } from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function HeaderProduct({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={[styles.Box, { flex: 4 }]}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} activeOpacity={1} style={styles.BoxSearch}>
                    <Text style={{ color: fontBlack2, fontSize: sizeFont(3) }}>Cari Produk . . .</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.Box, { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }]}>
                <TouchableOpacity activeOpacity={0.6} style={{ padding: 7, borderRadius: 100, backgroundColor: bgWhiteRGBA }}>
                    <Ionicons name="search" color={fontWhite} size={sizeFont(5)} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={{ padding: 7, marginLeft: 15, borderRadius: 100, backgroundColor: bgWhiteRGBA }}>
                    <Ionicons name="cart" color={fontWhite} size={sizeFont(5)} />
                    <View style={styles.Circle}>
                        <Text style={{ color: fontWhite, fontSize: sizeFont(2.3) }}>4</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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
    BoxSearch: {
        backgroundColor: bgWhite,
        padding: 5,
        borderRadius: 100,
        paddingLeft: 20,
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
