/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { fontBlack1, bgBlack1, borderBlack3 } from '../../assets/colors';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeHeight, sizeFont, sizeWidth } from '../../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const dataInstan = [
    { title: 'Grab Instan', harga: '43.000', image: require('../../assets/images/Kurir/Grab.png') },
    { title: 'Gojek Instan', harga: '43.000', image: require('../../assets/images/Kurir/Gojek.png') },
];

const sameDay = [
    { title: 'Grab Instan', harga: '43.000', image: require('../../assets/images/Kurir/Grab.png') },
    { title: 'JNE Instan', harga: '43.000', image: require('../../assets/images/Kurir/JNE.png') },
    { title: 'J&T Instan', harga: '43.000', image: require('../../assets/images/Kurir/JNT.png') },
];

const dataNextDay = [
    { title: 'Grab Instan', harga: '43.000', image: require('../../assets/images/Kurir/Grab.png') },
    { title: 'JNE Instan', harga: '43.000', image: require('../../assets/images/Kurir/JNE.png') },
    { title: 'J&T Instan', harga: '43.000', image: require('../../assets/images/Kurir/JNT.png') },
    { title: 'Gojek Instan', harga: '43.000', image: require('../../assets/images/Kurir/Gojek.png') },
    { title: 'Anter Aja Instan', harga: '43.000', image: require('../../assets/images/Kurir/AnterAja.png') },
    { title: 'Sicepat Instan', harga: '43.000', image: require('../../assets/images/Kurir/Sicepat.png') },
];

export default function Kurir() {
    return (
        <View style={styles.Container}>
            <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Pilih Kurir Pengiriman</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Box}>
                    <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium, marginBottom: 10 }}>Instan (3 Jam)</Text>
                    {
                        dataInstan.map((item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.6} key={index} style={styles.ItemBox}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.Image} source={item.image} />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{ fontSize: sizeFont(3.3) }}>{item.title}</Text>
                                            <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Rp. {item.harga}</Text>
                                        </View>
                                    </View>
                                    <Ionicons name="chevron-forward" size={sizeFont(5.5)} color={bgBlack1} />
                                </TouchableOpacity>
                            );
                        })
                    }
                    <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium, marginVertical: 15 }}>Same Day (6 - 8 Jam)</Text>
                    {
                        sameDay.map((item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.6} key={index} style={styles.ItemBox}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.Image} source={item.image} />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{ fontSize: sizeFont(3.3) }}>{item.title}</Text>
                                            <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Rp. {item.harga}</Text>
                                        </View>
                                    </View>
                                    <Ionicons name="chevron-forward" size={sizeFont(5.5)} color={bgBlack1} />
                                </TouchableOpacity>
                            );
                        })
                    }
                    <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium, marginVertical: 15 }}>Next Day (1 Hari)</Text>
                    {
                        dataNextDay.map((item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.6} key={index} style={styles.ItemBox}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.Image} source={item.image} />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{ fontSize: sizeFont(3.3) }}>{item.title}</Text>
                                            <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Rp. {item.harga}</Text>
                                        </View>
                                    </View>
                                    <Ionicons name="chevron-forward" size={sizeFont(5.5)} color={bgBlack1} />
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
        // flex: 1,
        paddingHorizontal: 20,
        paddingBottom: sizeHeight(10),
    },
    Box: {

        marginTop: sizeHeight(2),
    },
    ItemBox: {
        borderBottomWidth: 1,
        borderBottomColor: borderBlack3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingTop: 5,
        paddingVertical: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(13),
        height: sizeWidth(8),
    },
});
