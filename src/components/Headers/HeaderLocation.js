/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bgWhiteRGBA1, fontBlack2, borderBlack2 } from '../../assets/colors';
import { sizeFont } from '../../assets/responsive';

export default function HeaderLocation() {
    return (
        <View style={styles.Container}>
            <View style={styles.Box}>
                <TouchableOpacity activeOpacity={0.6} style={{ paddingRight: 10, paddingVertical: 10 }}>
                    <Ionicons name="chevron-back" size={sizeFont(6)} color={fontBlack2} />
                </TouchableOpacity>
                <TextInput style={styles.Input} placeholder="Cari Lokasi" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
        // paddingHorizontal: 20,
    },
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft: 10,
        paddingHorizontal: 20,
        backgroundColor: bgWhiteRGBA1,
        borderRadius: 10,
    },
    Input: {
        // borderWidth: 1,
        width: '90%',
    },
});
