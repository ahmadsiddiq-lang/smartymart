/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT, sizeFont, sizeHeight } from '../assets/responsive';
import { fontBlack, MainColor, fontWhite, fontBlack1, borderBlack2 } from '../assets/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StackActions } from '@react-navigation/native';


export default function Login({ navigation }) {

    const [visible, setVisible] = useState(true);

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()} style={styles.Container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Image style={styles.ImageBackground} source={require('../assets/images/Background.png')} />
            <Text style={styles.Title}>Smarty <Text style={{ color: fontBlack }}>Mart</Text></Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Conten}>
                    <View style={styles.BoxInput}>
                        <Text style={{ fontFamily: 'Arial-Rounded', fontSize: sizeFont(3.3), color: fontBlack1 }}>Nomor Telepon</Text>
                        <TextInput selectionColor={MainColor} style={styles.Input} maxLength={15} keyboardType="phone-pad" />
                    </View>
                    <View style={styles.BoxInput}>
                        <Text style={{ fontFamily: 'Arial-Rounded', fontSize: sizeFont(3.3), color: fontBlack1 }}>Password</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextInput selectionColor={MainColor} style={styles.Input} secureTextEntry={visible} />
                            <TouchableOpacity onPress={() => setVisible(e => !e)} activeOpacity={0.5} style={{ padding: 10, justifyContent: 'center' }}>
                                <FontAwesome5 name={visible ? 'eye-slash' : 'eye'} solid color={fontBlack1} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace('Home'))} activeOpacity={0.5} style={styles.Btn}>
                        <Text style={{ color: fontWhite, fontSize: sizeFont(4) }}>Masuk</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: sizeFont(3.3), color: fontBlack1, fontFamily: 'Arial-Rounded' }}>Belum memiliki akun ? <Text onPress={() => navigation.dispatch(StackActions.replace('Daftar'))} style={{ color: MainColor, fontSize: sizeFont(3.5) }}>Daftar</Text></Text>
                </View>
            </ScrollView>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    ImageBackground: {
        position: 'absolute',
        zIndex: -999,
        resizeMode: 'stretch',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    Title: {
        color: MainColor,
        fontSize: sizeFont(9),
        fontFamily: 'Arial-Rounded',
        marginTop: sizeHeight(20),
        marginBottom: sizeHeight(10),
    },
    Conten: {
        // borderWidth: 1,
        width: '100%',
    },
    BoxInput: {
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
        marginBottom: 20,
    },
    Input: {
        paddingVertical: 0,
        fontSize: sizeFont(3.8),
        marginVertical: 10,
        // letterSpacing: 0.8,
        // borderWidth: 1,
        width: '90%',
    },
    Btn: {
        backgroundColor: MainColor,
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 30,
    },
});
