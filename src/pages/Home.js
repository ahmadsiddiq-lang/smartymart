/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ToastAndroid } from 'react-native';
import { bgWhite, MainColor, borderWhite, fontWhite } from '../assets/colors';
import { sizeWidth, sizeFont } from '../assets/responsive';
import Header from '../components/Headers/HeaderHome';
import Banner from '../components/Home/Banner';
import ProductList from '../components/Home/ProductList';

const dataBanner = [
    { image: require('../assets/images/Banner/Banner1.png') },
    { image: require('../assets/images/Banner/Banner2.png') },
    { image: require('../assets/images/Banner/Banner1.png') },
    { image: require('../assets/images/Banner/Banner2.png') },
];

const dataProduct = [
    { id: 1, image: require('../assets/images/Product/Produk1.png'), harga: 24000 },
    { id: 2, image: require('../assets/images/Product/Produk2.png'), harga: 25000 },
    { id: 3, image: require('../assets/images/Product/Produk3.png'), harga: 21000 },
    { id: 4, image: require('../assets/images/Product/Produk4.png'), harga: 23000 },
    { id: 5, image: require('../assets/images/Product/Produk5.png'), harga: 20000 },
    { id: 6, image: require('../assets/images/Product/Produk6.png'), harga: 28000 },
];

export default class Home extends Component {

    state = {
        Cart: [],
        data: [],
        Qty: [],
        stateDataProduct: [],
    }

    handleProduct = (item, index) => {
        this.handleCart(item);
        this.handleSetQty();
        const newData = [];
        newData.push({ ...dataProduct[index], status: true });
        if (item) {
            dataProduct[index] = newData[0];
            // console.log(stateDataProduct);
            this.setState({ stateDataProduct: dataProduct });
        } else {
            this.setState({ stateDataProduct: [] });
        }
    };

    handleHarga = () => {
        let total = 0;
        this.state.Cart.forEach((item, index) => {
            total += this.state.Cart[index].harga;
        });
        return total;
    }

    // conver to rupiah
    rupiah = (number) => {
        var reverse = number.toString().split('').reverse().join(''),
            thousand = reverse.match(/\d{1,3}/g);
        thousand = thousand.join('.').split('').reverse().join('');
        return thousand;
    }

    handleCart = (dataInput) => {
        if (this.state.Cart.length > 0) {
            let status = false;
            this.state.Cart.forEach((item, index) => {
                if (dataInput.id === item.id) {
                    status = true;
                }
            });
            if (status === false) {
                this.state.data.push({ ...dataInput });
                this.setState({ Cart: this.state.data });
                // console.log(item.id);
            } else {
                ToastAndroid.showWithGravity(
                    'Product sudah ada',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                );
            }
        } else {
            this.state.data.push({ ...dataInput });
            this.setState({ Cart: this.state.data });
            // console.log('kosong');
        }
        // SetQty
    };

    handleSetQty = () => {
        const con = {};
        dataProduct.forEach((x, i) => {
            con[x.id] = 1;
        });
        this.setState({ Qty: con });
    }

    handleQtyPlus = (id) => {
        if (this.state.Cart.length > 0) {
            this.setState({
                Qty: { ...this.state.Qty, [id]: this.state.Qty[id] + 1 },
            });
            this.state.Cart.forEach((item, index) => {
                if (item.id === id) {
                    this.state.Cart[index].harga = item.harga * (this.state.Qty[id] + 1);
                    this.setState({
                        Cart: this.state.Cart,
                    });
                }
            });
        }
    }
    handleQtyMinu = (id) => {
        // console.log(this.state.Qty[id]);
        if (this.state.Qty[id] > 1) {
            this.setState({
                Qty: { ...this.state.Qty, [id]: this.state.Qty[id] - 1 },
            });
            this.state.Cart.forEach((item, index) => {
                if (item.id === id) {
                    this.state.Cart[index].harga = item.harga / this.state.Qty[id];
                    this.setState({
                        Cart: this.state.Cart,
                    });
                }
            });
        }
    }

    handleBtnCart = () => {
        if (this.state.stateDataProduct.length > 0) {
            this.state.stateDataProduct.forEach((item, index) => {
                const newData = [];
                newData.push({ ...dataProduct[index], status: false });
                if (item) {
                    dataProduct[index] = newData[0];
                    // console.log(stateDataProduct);
                    this.setState({ stateDataProduct: dataProduct });
                } else {
                    this.setState({ stateDataProduct: [] });
                }
            });
            this.setState({
                Cart: [],
                data: [],
                Qty: [],
            });
            this.props.navigation.navigate('Keranjang');
        }
    }

    componentDidMount() {
        this.handleSetQty();
        this.setState({ stateDataProduct: dataProduct });
    }

    render() {
        return (
            <View style={styles.Container}>
                <Header navigation={this.props.navigation} />
                <Banner navigation={this.props.navigation} dataBanner={dataBanner} />
                <ProductList
                    handleProduct={this.handleProduct}
                    handleQtyPlus={this.handleQtyPlus}
                    handleQtyMinu={this.handleQtyMinu}
                    Qty={this.state.Qty}
                    // dataProduct={dataProduct}
                    stateDataProduct={this.state.stateDataProduct}
                    handleCart={this.handleCart}
                    Cart={this.state.Cart}
                    navigation={this.props.navigation}
                />
                <View style={styles.Footer}>
                    <TouchableOpacity onPress={() => this.handleBtnCart()} activeOpacity={0.8} style={styles.Btn}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: fontWhite, fontSize: sizeFont(3.5) }}>{this.state.Cart.length} Items</Text>
                            <View style={{ borderLeftWidth: 1, borderColor: borderWhite, marginLeft: 8, paddingLeft: 8 }}>
                                <Text style={{ color: fontWhite, fontSize: sizeFont(3.5) }}>Rp. {this.rupiah(this.handleHarga())}</Text>
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
