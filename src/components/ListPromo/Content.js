/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid, Image, ScrollView } from 'react-native';
import { bgBlack1, bgWhite, MainColor, fontWhite, borderBlack2, fontBlack, fontBlack1 } from '../../assets/colors';
import { sizeFont, sizeHeight } from '../../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Content({ navigation }) {

    const [inputText, setText] = useState('');

    const handlePromo = () => {
        if (inputText) {
            ToastAndroid.showWithGravity(
                'Berhasil digunakan',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        } else {
            ToastAndroid.showWithGravity(
                'Pilih Promo',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    };

    return (
        <View style={styles.Container}>
            <View style={styles.Head}>
                <Text style={{ color: fontBlack, fontSize: sizeFont(3.3) }}>Punya kode promo ?</Text>
                <View style={styles.BoxInput}>
                    <TextInput value={inputText} placeholder="Ketik kode promo" onChangeText={(e) => setText(e)} selectionColor={MainColor} style={styles.Input} />
                    <TouchableOpacity activeOpacity={0.6} onPress={() => handlePromo()} style={styles.Btn}>
                        <Text style={{ color: fontWhite, fontSize: sizeFont(3.3) }}>Gunakan</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Content}>
                    {

                        ['KJASD86', '28KSJD', '89KJ7AS', '2364JKS', '893KHSD'].map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => setText(item)} key={index} style={styles.BoxList}>
                                    <Image style={styles.Image} source={require('../../assets/images/Promo/Promo.png')} />
                                    <View style={styles.BoxCircle}>
                                        <View style={[styles.CircleWhite, styles.Left]} />
                                        <View style={[styles.CircleWhite, styles.Right]} />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.BoxContentList}>
                                            <Ionicons name="time" size={sizeFont(8)} color={MainColor} />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ color: fontBlack1 }}>Berlaku Hingga</Text>
                                                <Text>30 April 2020</Text>
                                            </View>
                                        </View>
                                        <View style={styles.BoxContentList}>
                                            <View style={styles.Circle}>
                                                <Text style={{ color: fontWhite, fontSize: sizeFont(3), textAlign: 'center' }}>Rp</Text>
                                            </View>
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ color: fontBlack1 }}>Minimal Transaksi</Text>
                                                <Text>Rp. 500.000</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })

                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: bgWhite,
        paddingHorizontal: 20,
    },
    Head: {
        borderWidth: 1,
        borderColor: borderBlack2,
        marginTop: 20,
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    BoxInput: {
        flexDirection: 'row',
        width: '100%',
        // borderWidth: 1,
        justifyContent: 'space-between',
    },
    Input: {
        borderBottomWidth: 1,
        borderBottomColor: bgBlack1,
        padding: 0,
        width: '70%',
        fontSize: sizeFont(3.3),
        letterSpacing: 0.5,
        color: fontBlack,
    },
    Btn: {
        backgroundColor: MainColor,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    Content: {
        overflow: 'hidden',
        paddingVertical: 5,
        flex: 1,
    },
    BoxList: {
        flex: 1,
        borderWidth: 1,
        borderColor: borderBlack2,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: '100%',
        height: sizeHeight(17.2),
        // borderRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    BoxContentList: {
        // borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    Circle: {
        backgroundColor: MainColor,
        padding: 3,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    BoxCircle: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: sizeHeight(17.2) / 1.5,
    },
    CircleWhite: {
        backgroundColor: bgWhite,
        width: 28,
        height: 28,
        position: 'absolute',
        top: 0,
        zIndex: 1,
        borderRadius: 100,
    },
    Left: {
        left: -14,
    },
    Right: {
        right: -14,
    },
});
