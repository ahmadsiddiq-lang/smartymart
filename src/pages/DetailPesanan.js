/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Headers/HeaderPages';
import { bgBlack2, bgWhite, fontBlack1, MainColor, MainColor2 } from '../assets/colors';
import { sizeFont } from '../assets/responsive';
import { Poppins } from '../assets/fonts/Poppins';
import Content from '../components/DetailPesanan/Content';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Address = [
    { title: 'Jhone Doe', Address: 'The Mansion Bougenville, Jl. Trembesi Blok D4, Bandar Baru, Kompleks Kemayoran RW 10, Pademangan Timur, 14410. Jakarta Utara' },
];

export default function DetailPesanan({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Detail Pesanan'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Box1}>
                    <Text style={{ fontSize: sizeFont(3.3) }}>Ambil sendiri pesanan ? </Text>
                    <Switch
                        trackColor={{ false: '#767577', true: MainColor2 }}
                        thumbColor={isEnabled ? MainColor : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                {
                    !isEnabled &&
                    <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 5 }}>Alamat Penerima</Text>
                            <TouchableOpacity activeOpacity={0.6} style={{ paddingHorizontal: 10 }}>
                                <Text style={{ color: MainColor }}>{Address.length > 0 ? 'Ubah' : 'Pilih'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            {
                                Address.length > 0 &&
                                Address.map((item, index) => {
                                    return (
                                        <SafeAreaView key={index}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Ionicons name="location" size={sizeFont(4)} color={MainColor} />
                                                <Text style={{ marginLeft: 10, fontSize: sizeFont(3.3) }}>{item.title}</Text>
                                            </View>
                                            <Text numberOfLines={2} style={{ fontSize: sizeFont(3.3), color: fontBlack1, marginLeft: 20 }}>{item.Address}</Text>
                                        </SafeAreaView>
                                    );
                                })
                            }
                        </View>
                    </View>
                }
                <View style={styles.Line} />
                <Content isEnabled={isEnabled} navigation={navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
    Box1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    Line: {
        height: 5,
        backgroundColor: bgBlack2,
        marginVertical: 10,
    },
});
