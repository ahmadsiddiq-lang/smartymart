/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { bgWhite, MainColor, borderWhite, fontWhite } from '../assets/colors';
import { sizeWidth, sizeFont } from '../assets/responsive';
import Header from '../components/Headers/HeaderHome';
import Banner from '../components/Home/Banner';
import ProductList from '../components/Home/ProductList';

const data = [
    { image: require('../assets/images/Banner/Banner1.png') },
    { image: require('../assets/images/Banner/Banner2.png') },
    { image: require('../assets/images/Banner/Banner1.png') },
    { image: require('../assets/images/Banner/Banner2.png') },
];

const dataProduct = [
    { image: require('../assets/images/Product/Produk1.png'), harga: 24000 },
    { image: require('../assets/images/Product/Produk2.png'), harga: 25000 },
    { image: require('../assets/images/Product/Produk3.png'), harga: 21000 },
    { image: require('../assets/images/Product/Produk4.png'), harga: 23000 },
    { image: require('../assets/images/Product/Produk5.png'), harga: 20000 },
    { image: require('../assets/images/Product/Produk6.png'), harga: 28000 },
];

export default class Home extends Component {

    state = {
        Cart: [],
        data: [],
    }

    handleCart = (dataInput) => {
        this.state.Cart.push({ ...dataInput });
        this.setState({ data: this.state.Cart });
        // console.log(this.state.Cart);
    };

    render() {
        return (
            <View style={styles.Container}>
                <Header Navigation={this.props.navigation} />
                <Banner Navigation={this.props.navigation} data={data} />
                <ProductList dataProduct={dataProduct} handleCart={this.handleCart} Cart={this.state.Cart} Navigation={this.props.navigation} />
                <View style={styles.Footer}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.Btn}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: fontWhite, fontSize: sizeFont(3.5) }}>{this.state.data.length} Items</Text>
                            <View style={{ borderLeftWidth: 1, borderColor: borderWhite, marginLeft: 8, paddingLeft: 8 }}>
                                <Text style={{ color: fontWhite, fontSize: sizeFont(3.5) }}>Rp. 270.000</Text>
                            </View>
                        </View>
                        <Image style={{
                            resizeMode: 'contain',
                            width: sizeWidth(5),
                        }} source={require('../assets/images/Icons/IconKeranjangBawah.png')} />
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
    Footer: {
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
    },
    Btn: {
        backgroundColor: MainColor,
        marginBottom: 10,
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});
