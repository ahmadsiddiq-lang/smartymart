/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH, sizeHeight } from '../assets/responsive';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import Header from '../components/Headers/HeaderLocation';
import { bgWhite, MainColor, borderBlack2, fontBlack2, fontBlack1, fontWhite } from '../assets/colors';
import { sizeFont } from '../assets/responsive';
import { Poppins } from '../assets/fonts/Poppins';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Location({ navigation }) {
    const mapView = useRef(null);
    const [curentPosition, setCurentPosition] = useState(null);
    const [poSitionTarget, setpoSitionTarget] = useState(null);

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
                mapView.current.animateToRegion({
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

    const handlePosition = (data, geometry) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;
        mapView.current.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0,
            longitudeDelta: 0.05,
        });
        setpoSitionTarget({
            latitude,
            longitude,
            latitudeDelta: 0,
            longitudeDelta: 0.05,
            // title: data.structured_formatting.main_text,
        });
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
            <Header setpoSitionTarget={setpoSitionTarget} handlePosition={handlePosition} navigation={navigation} />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={curentPosition}
                showsUserLocation={true}
                showsMyLocationButton={false}
                ref={mapView}
                loadingEnabled={true}
                showsCompass={false}

            >
                {
                    poSitionTarget && (<Marker coordinate={poSitionTarget} />)
                }
            </MapView>
            <View style={styles.Content}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Lokasi Pada Peta</Text>
                <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Geser titik di peta atau cari alamat terdekat</Text>
                <View style={styles.BoxAddress}>
                    <Ionicons name="location" size={sizeFont(8)} color={MainColor} />
                    <Text style={{ fontSize: sizeFont(3.3), marginLeft: 10 }}>The Mansion Bougenville, Jl. Trembesi Blok D4, Bandar Baru, Kompleks Kemayoran RW 10, Pademangan Timur, 14410. Jakarta Utara</Text>
                </View>
                <View style={styles.BoxDetail}>
                    <Text style={{ fontSize: sizeFont(3.3) }}>Detail Alamat</Text>
                    <TextInput placeholder="Masukkan detail alamat" />
                </View>
                <TouchableOpacity activeOpacity={0.6} style={styles.Btn}>
                    <Text style={{ fontSize: sizeFont(3.5), color: fontWhite }}>Simpan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
    map: {
        position: 'relative',
        top: 0,
        height: sizeHeight(55),
        width: SCREEN_WIDTH,
    },
    Content: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    BoxAddress: {
        borderWidth: 1,
        borderColor: borderBlack2,
        marginTop: sizeHeight(3),
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        // flexWrap: 'wrap',
        padding: 10,
        borderRadius: 8,
    },
    BoxDetail: {
        marginTop: sizeHeight(3),
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
    },
    Btn: {
        backgroundColor: MainColor,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: sizeHeight(2),
    },
});
