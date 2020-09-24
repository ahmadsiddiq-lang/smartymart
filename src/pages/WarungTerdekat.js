/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Headers/HeaderWarungTerdekat';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { SCREEN_WIDTH, sizeWidth } from '../assets/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizeHeight, sizeFont } from '../assets/responsive';
import { MainColor, fontWhite, bgWhite, borderBlack2, fontBlack1 } from '../assets/colors';
navigator.geolocation = require('@react-native-community/geolocation');

const dataWarung = [
    { position: { lat: -6.156826, long: 106.839559 } },
    { position: { lat: -6.136231, long: 106.883082 } },
    { position: { lat: -6.158077, long: 106.906059 } },
    { position: { lat: -6.176168, long: 106.888228 } },
    { position: { lat: -6.221222, long: 106.861822 } },
];


export default function WarungTerdekat({ navigation }) {
    const mapView = useRef(null);
    const [curentPosition, setCurentPosition] = useState(null);
    const getCoordinate = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { longitude, latitude } = position.coords;
                setCurentPosition({
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0,
                    longitudeDelta: 0.05,
                });
            },
            error => console.log(error.message),
            { timeout: 20000, maximumAge: 1000 },
        );
    };


    const handlePosition = (data) => {
        const { position: { lat: latitude, long: longitude } } = data;
        mapView.current.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0,
            longitudeDelta: 0.05,
        });
        // setpoSitionTarget({
        //   latitude,
        //   longitude,
        //   latitudeDelta: 0,
        //   longitudeDelta: 0.05,
        //   // title: data.structured_formatting.main_text,
        // });
        //   console.log(curentPosition);
    };

    useEffect(() => {
        getCoordinate();
        return () => {
            setCurentPosition(null);
        };
    }, []);
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <MapView
                ref={mapView}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={curentPosition}
                showsUserLocation
            >
                {
                    dataWarung.map((item, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: item.position.lat,
                                    longitude: item.position.long,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                }}
                                image={require('../assets/images/Icons/Marker.png')}
                            />
                        );
                    })
                }
            </MapView>
            <View style={styles.Content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        dataWarung.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => handlePosition(item)} activeOpacity={0.6} key={index} style={styles.ListCard}>
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
                                </TouchableOpacity>
                            );
                        })
                    }
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
        marginVertical: 8,
    },
    BoxTitle: {
        marginLeft: 10,
        // borderWidth: 1,
    },
});
