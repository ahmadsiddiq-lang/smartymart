/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sizeHeight, sizeFont } from '../../assets/responsive';
import { MainColor, fontWhite, bgWhiteRGBA } from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderPages({ navigation, title }) {
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={{ padding: 7, borderRadius: 100, backgroundColor: bgWhiteRGBA }}>
                <Ionicons name="chevron-back" color={fontWhite} size={sizeFont(5)} />
            </TouchableOpacity>
            <Text style={{
                color: fontWhite,
                marginLeft: 15,
                fontSize: sizeFont(4),
            }}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height: sizeHeight(8),
        backgroundColor: MainColor,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
});
