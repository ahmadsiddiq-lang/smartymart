/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Headers/HeaderWarungTerdekat';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SCREEN_WIDTH, sizeWidth } from '../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizeHeight, sizeFont } from '../assets/responsive';
import { MainColor, fontWhite, bgWhite, borderBlack2, fontBlack1 } from '../assets/colors';


export default function WarungTerdekat({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            />
            <View style={styles.Content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.ListCard}>
                        <View style={styles.BoxAvatarCircle}>
                            <Text style={{ color: fontWhite, fontSize: sizeFont(6), marginTop: 5 }}>S</Text>
                        </View>
                        <View style={styles.BoxTitle}>
                            <Text style={{ fontSize: sizeFont(3.5) }}>Agen Smarty Mart 1</Text>
                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <Ionicons name="location" color={fontBlack1} size={sizeFont(4)} />
                                <Text style={{ marginLeft: 5, fontSize: sizeFont(3), color: fontBlack1 }}>650 M - Kemayoran</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: SCREEN_WIDTH,
        height: '50%',
    },
    Content: {
        backgroundColor: bgWhite,
        flex: 1,
        paddingTop: 10,
    },
    ListCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
        paddingVertical: 10,
    },
    BoxAvatarCircle: {
        backgroundColor: MainColor,
        padding: 20,
        borderRadius: 100,
        width: sizeWidth(13),
        height: sizeWidth(13),
        alignItems: 'center',
        justifyContent: 'center',
    },
    BoxTitle: {
        marginLeft: 10,
        // borderWidth: 1,
    },
});
