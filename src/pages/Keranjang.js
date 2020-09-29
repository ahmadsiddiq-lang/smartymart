/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Headers/HeaderPages';
import Content from '../components/Keranjang/Content';
import CheckBox from '@react-native-community/checkbox';
import { bgWhite, borderBlack2, MainColor, fontWhite } from '../assets/colors';
import { sizeFont, sizeHeight } from '../assets/responsive';


const dataProduct = [
    {
        stor: 'Agen Smarty Mart 1', address: 'Kemayoran, Jakarta Pusat', listProduct: [
            { id: 1, image: require('../assets/images/Product/Produk3.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
            { id: 2, image: require('../assets/images/Product/Produk2.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
            { id: 3, image: require('../assets/images/Product/Produk4.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
        ],
    },
    {
        stor: 'Agen Smarty Mart 1', address: 'Kemayoran, Jakarta Pusat', listProduct: [
            { id: 4, image: require('../assets/images/Product/Produk3.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
            { id: 5, image: require('../assets/images/Product/Produk2.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
            { id: 6, image: require('../assets/images/Product/Produk4.png'), title: 'Beras Setra Ramos', satuan: '5 Kg', harga: '95.000' },
        ],
    },
];


export default class Keranjang extends Component {

    state = {
        toggleCheckBox: false,
        idCheck: [],
        Qty: [],
    }

    handleCheck = () => {
        this.setState({ toggleCheckBox: !this.state.toggleCheckBox });
        const con = [];
        if (this.state.toggleCheckBox) {
            dataProduct.forEach((x, i) => {
                con.push({ id: i, CheckBox: false });
            });
            this.setState({ idCheck: con });
        } else {
            dataProduct.forEach((x, i) => {
                con.push({ id: i, CheckBox: true });
            });
            this.setState({ idCheck: con });
        }

    };

    handleIdCheck = () => {
        const con = [];
        dataProduct.forEach((x, i) => {
            con.push({ id: i, CheckBox: false });
        });
        this.setState({ idCheck: con });
    };

    CheckActive = (inputIndex, status) => {
        // console.log(status);
        const con = [];
        if (status) {
            con.push({ ...this.state.idCheck[inputIndex], CheckBox: false });
            this.state.idCheck[inputIndex] = con[0];
            this.setState({ idCheck: this.state.idCheck });
        } else {
            con.push({ ...this.state.idCheck[inputIndex], CheckBox: true });
            this.state.idCheck[inputIndex] = con[0];
            this.setState({ idCheck: this.state.idCheck });
        }
    };

    handleQtyProduct = () => {
        const con = {};
        dataProduct.forEach((x, i) => {
            x.listProduct.forEach((item, index) => {
                con[item.id] = 1;
            });
        });
        this.setState({ Qty: con });
    }

    handlePlus = (id) => {
        this.setState({
            Qty: { ...this.state.Qty, [id]: this.state.Qty[id] + 1 },
        });
    }
    handleMinus = (id) => {
        if (this.state.Qty[id] > 1) {
            this.setState({
                Qty: { ...this.state.Qty, [id]: this.state.Qty[id] - 1 },
            });
        }
    }

    componentDidMount() {
        this.handleIdCheck();
        this.handleQtyProduct();
    }

    componentDidCatch() {
        this.handleIdCheck();
        this.handleQtyProduct();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.Container}>
                <Header navigation={navigation} title={'Keranjang'} />
                <View style={styles.Head}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            disabled={false}
                            value={this.state.toggleCheckBox}
                            tintColors={{ true: MainColor }}
                            onValueChange={(newValue) => this.handleCheck()}
                        />
                        <Text style={{ marginLeft: 10, fontSize: sizeFont(3.3) }}>Pilih semua produk </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} style={styles.Btn}>
                        <Text style={{ color: MainColor, fontSize: sizeFont(3.5) }}>Hapus</Text>
                    </TouchableOpacity>
                </View>
                <Content
                    navigation={navigation}
                    dataProduct={dataProduct}
                    idCheck={this.state.idCheck}
                    CheckActive={this.CheckActive}
                    handleQtyProduct={this.handleQtyProduct}
                    Qty={this.state.Qty}
                    handlePlus={this.handlePlus}
                    handleMinus={this.handleMinus}
                />
                <View style={styles.Footer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: sizeFont(3.5) }}>Sub Total</Text>
                        <Text style={{ fontSize: sizeFont(3.5), color: MainColor }}>Rp. 485.000</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailPesanan')} activeOpacity={0.6} style={styles.BtnBeli}>
                        <Text style={{ color: fontWhite }}>Beli</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
    Head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
    },
    Btn: {
        padding: 7,
        // borderWidth: 1,
        justifyContent: 'center',
    },
    Footer: {
        backgroundColor: bgWhite,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: borderBlack2,
    },
    BtnBeli: {
        backgroundColor: MainColor,
        alignItems: 'center',
        paddingVertical: sizeFont(2),
        borderRadius: 10,
        marginTop: sizeHeight(1.2),
    },
});
