import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { borderBlack2, fontBlack1, fontWhite, MainColor } from '../../assets/colors';
import { sizeFont } from '../../assets/responsive';

const data = [
    'Semua', 'Menunggu Konfirmasi', 'Pesanan diproses', 'Pesanan Selesai',
];

export default class Category extends Component {

    state = {
        indexOf: 0,
    }

    render() {
        return (
            <View style={styles.Container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.Content}>
                        {
                            data.map((item, index) => {
                                return (
                                    <TouchableOpacity onPress={() => this.setState({ indexOf: index })} key={index} activeOpacity={0.8} style={[
                                        styles.BtnCategory,
                                        this.state.indexOf === index && {
                                            backgroundColor: MainColor,
                                        },
                                    ]}>
                                        <Text style={[{
                                            fontSize: sizeFont(3.3),
                                        },
                                        this.state.indexOf === index ? {
                                            color: fontWhite,
                                        } : {
                                                color: fontBlack1,
                                            },
                                        ]}>{item}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
        paddingVertical: 10,
    },
    Content: {
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    BtnCategory: {
        borderWidth: 1,
        borderColor: borderBlack2,
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 3,
        alignItems: 'center',
        marginHorizontal: 10,
    },
});
