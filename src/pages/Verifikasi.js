/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { bgWhite, fontWhite, MainColor } from '../assets/colors';
import { sizeFont, sizeHeight, sizeWidth } from '../assets/responsive';
import Header from '../components/Headers/HeaderPagesWhite';

export default function Verifikasi({ navigation }) {
    // const [indexOf, setIndex] = useState(null);

    const inputRefs = Array(4).fill(React.createRef());

    const goNextAfterEdit = (e, index) => {
        // console.log(e);
        if (e > 0) {
            if (index < inputRefs.length - 1) {
                inputRefs[index + 1].focus();
            }
        }
        // else if (index > 0 || e === 0) {
        //     inputRefs[index - 1].focus();
        // }
    };

    // var counter = 2 * 60;
    // const handleTimer = setInterval(() => {
    //     // const data  = {
    //     //     menit: counter > counter / 2 ? `0${Math.ceil(counter / 1000 * 60)}` :
    //     // }
    //     if (counter > 0) {
    //         let menit = Math.ceil((counter % (1000 * 60)) / 1000);
    //         let secon = Math.ceil((counter % (1000 * 60)) / 2);
    //         const dateTime = {
    //             a: menit,
    //             b: secon,
    //         };
    //         console.log(dateTime);
    //         counter -= 1;
    //     } else {
    //         clearInterval(handleTimer);
    //     }
    // }, 1000);
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()} style={styles.Container}>
            <Header navigation={navigation} title={'Verifikasi'} />
            <View style={styles.Content}>
                <Text style={{ textAlign: 'center', fontSize: sizeFont(3.3) }}>Kami telah mengirimkan 4 digit kode melalui sms ke nomor <Text style={{ color: MainColor, fontFamily: 'Arial-Rounded' }}>08237889987</Text></Text>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: sizeFont(5), marginVertical: sizeHeight(3) }}>MASUKKAN KODE</Text>
                    <View style={styles.BoxItem}>
                        {
                            inputRefs.map((item, index) => {
                                return (
                                    <TextInput key={index}
                                        onChangeText={(e) => goNextAfterEdit(e, index)}
                                        ref={r => inputRefs[index] = r}
                                        maxLength={1}
                                        keyboardType="numeric"
                                        // onFocus={() => setIndex(index)}
                                        selectionColor={MainColor}
                                        style={styles.TextInput} />
                                );
                            })
                        }
                    </View>
                </View>
                <Text style={{ textAlign: 'center', marginVertical: sizeHeight(8), fontSize: sizeFont(3.3) }}>Kirim ulang kode verifikasi <Text style={{ color: MainColor, fontFamily: 'Arial-Rounded' }}>({'00:50'})</Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.6} style={styles.Btn} >
                    <Text style={{ color: fontWhite, fontSize: sizeFont(4) }}>Verifikasi</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Content: {
        backgroundColor: bgWhite,
        flex: 1,
        padding: 20,
        paddingTop: sizeHeight(10),
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    BoxItem: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: '80%',
        marginHorizontal: sizeWidth(10),
    },
    TextInput: {
        borderBottomWidth: 2,
        width: '15%',
        borderRadius: 7,
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: sizeFont(5),
        paddingBottom: 5,
        paddingTop: 10,
        color: MainColor,
        borderBottomColor: MainColor,
    },
    Btn: {
        backgroundColor: MainColor,
        alignItems: 'center',
        padding: 6,
        borderRadius: 20,
    },
});
