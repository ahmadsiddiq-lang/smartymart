import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Headers/HeaderProduct';
import Content from '../components/Product/Content';
import Category from '../components/Product/Category';

export default function Product({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} />
            <Category navigation={navigation} />
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
