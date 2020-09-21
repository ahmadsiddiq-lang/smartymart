import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { bgBlack1, borderBlack2, fontBlack1, MainColor } from '../../assets/colors';
import { sizeFont, sizeWidth } from '../../assets/responsive';

const dataIocn = [
    { image: require('../../assets/images/IconCategory/icon5.png'), title: 'Semua' },
    { image: require('../../assets/images/IconCategory/icon4.png'), title: 'Sayuran' },
    { image: require('../../assets/images/IconCategory/icon3.png'), title: 'Minuman' },
    { image: require('../../assets/images/IconCategory/icon2.png'), title: 'Daging' },
    { image: require('../../assets/images/IconCategory/icon1.png'), title: 'Buah' },
];

export default function Category() {

    const [indexOf, setIndex] = useState(0);

    return (
        <View style={styles.Container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.BoxContent}>
                    {
                        dataIocn.map((item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setIndex(index)} key={index} style={styles.Content}>
                                    <View style={[styles.BoxIcon, indexOf === index && styles.BoxActive]}>
                                        <Image style={styles.Image} source={item.image} />
                                    </View>
                                    <Text style={[{ fontSize: sizeFont(3) }, indexOf === index ? { color: MainColor } : { color: fontBlack1 }]}>{item.title}</Text>
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
        borderBottomWidth: 2,
        borderBottomColor: borderBlack2,
    },
    BoxContent: {
        flexDirection: 'row',
        // width: SCREEN_WIDTH,
        // flex: 1,
        // borderWidth: 1,
        // paddingHorizontal: 10,
    },
    Content: {
        // borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        flex: 1,
    },
    BoxIcon: {
        overflow: 'hidden',
        // borderWidth: 1,
        width: sizeWidth(10),
        height: sizeWidth(10),
        borderRadius: sizeWidth(12) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgBlack1,
    },
    Image: {
        resizeMode: 'contain',
        width: '60%',
        height: '60%',
    },
    BoxActive: {
        backgroundColor: MainColor,
    },
});
