/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sizeFont, sizeHeight } from '../../assets/responsive';
import { bgWhiteRGBA, fontWhite, MainColor } from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderWarungTerdekat({ navigation }) {
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={{ padding: 7, borderRadius: 100, backgroundColor: bgWhiteRGBA, marginLeft: 20 }}>
                <Ionicons name="chevron-back" color={fontWhite} size={sizeFont(5)} />
            </TouchableOpacity>
            <View style={styles.Box}>
                <Text style={{ fontSize: sizeFont(3), color: fontWhite }}>Pilih Agen</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="location" color={fontWhite} size={sizeFont(4)} />
                    <Text style={{ marginLeft: 5, fontSize: sizeFont(3.5), color: fontWhite }}>Agen Smarty Mart 1</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 20 }}>
                <TouchableOpacity activeOpacity={0.6} style={{ padding: 7, borderRadius: 100, backgroundColor: bgWhiteRGBA }}>
                    <Ionicons name="search" color={fontWhite} size={sizeFont(5)} />
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
        alignItems: 'center',
    },
    Box: {
        // borderWidth: 1,
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 15,
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
