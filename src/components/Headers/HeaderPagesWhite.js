/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { bgWhite, borderBlack2, fontBlack, fontBlack2, MainColor } from '../../assets/colors';
import { sizeHeight, sizeFont } from '../../assets/responsive';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HeaderPagesWhite({ navigation, title }) {
    return (
        <View style={styles.Container}>
            <StatusBar translucent={false} backgroundColor={MainColor} barStyle="light-content" />
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
                <FontAwesome5 name={'chevron-left'} brand size={sizeFont(4)} color={fontBlack2} />
            </TouchableOpacity>
            <Text style={{ marginLeft: 20, fontSize: sizeFont(4), color: fontBlack }}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: bgWhite,
        height: sizeHeight(6.5),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
    },
});
