import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import Header from '../components/Headers/HeaderPages';
import { bgBlack2, bgWhite, MainColor, MainColor2 } from '../assets/colors';
import Content from '../components/DetailPesanan/Content';

export default function DetailPesanan({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Detail Pesanan'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Box1}>
                    <Text>Ambil sendiri pesanan ? </Text>
                    <Switch
                        trackColor={{ false: '#767577', true: MainColor2 }}
                        thumbColor={isEnabled ? MainColor : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.Line} />
                <Content />
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
