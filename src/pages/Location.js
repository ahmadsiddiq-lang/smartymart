// import Ionicons from 'react-native-vector-icons/Ionicons';
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH, sizeHeight } from '../assets/responsive';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import Header from '../components/Headers/HeaderLocation';
import { bgWhite, MainColor, borderBlack2, fontBlack1, fontWhite, fontBlack2, fontBlack } from '../assets/colors';
import { sizeFont, sizeWidth } from '../assets/responsive';
import { Poppins } from '../assets/fonts/Poppins';
import RBSheet from 'react-native-raw-bottom-sheet';
import Geocoder from 'react-native-geocoding';


export default function Location({ navigation }) {
    const refRBSheet = useRef();
    const mapView = useRef(null);
    const [curentPosition, setCurentPosition] = useState(null);
    // const [poSitionTarget, setpoSitionTarget] = useState(null);
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
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

    const handlePosition = (data, geometry) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;
        mapView.current.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0,
            longitudeDelta: 0.05,
        });
        // setpoSitionTarget({
        //     latitude,
        //     longitude,
        //     latitudeDelta: 0,
        //     longitudeDelta: 0.05,
        //     // title: data.structured_formatting.main_text,
        // });
        // handleLatLong(latitude, longitude);
        setAddress(data.description);
    };

    const HandleAddresDetail = () => {
        refRBSheet.current.close();
    };

    const handleOnchangeRegion = region => {
        if (region) {
            const { latitude, longitude } = region;
            Geocoder.init('AIzaSyB6lpShDkjUcV-ukqGAQPPozr-T8H1F7Nk');
            Geocoder.from(latitude, longitude)
                .then(json => {
                    var addressComponent = json.results[0].formatted_address;
                    setAddress(addressComponent);
                    // console.log(addressComponent);
                })
                .catch(error => console.warn(error));
        }
    };

    useEffect(() => {
        getCoordinate();
        return () => {
            setCurentPosition(null);
        };
    }, []);
    return (
        <View style={styles.container}>
            <Header handlePosition={handlePosition} navigation={navigation} />
            <MapView
                // scrollEnabled={false}
                minZoomLevel={15}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={curentPosition}
                showsUserLocation={true}
                showsMyLocationButton={false}
                ref={mapView}
                loadingEnabled={true}
                showsCompass={false}
                onRegionChangeComplete={e => handleOnchangeRegion(e)}
            />
            <View style={{
                // marginTop: sizeWidth(15),
                position: 'absolute',
                left: sizeWidth(50) - 19,
                top: sizeHeight(20.6),
            }}>
                <Image style={{
                    resizeMode: 'contain',
                    width: sizeWidth(10),
                    height: sizeWidth(13),
                }} source={require('../assets/images/Icons/Marker.png')} />
            </View>
            <View style={styles.Content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Lokasi Pada Peta</Text>
                    <Text style={{ fontSize: sizeFont(3.3), color: fontBlack1 }}>Geser titik di peta atau cari alamat terdekat</Text>
                    <View style={styles.BoxAddress}>
                        <Image style={{
                            resizeMode: 'contain',
                            width: sizeWidth(8),
                            height: sizeWidth(10),
                        }} source={require('../assets/images/Icons/Marker.png')} />
                        <View style={{ flex: 1 }}>
                            {
                                address ?
                                    <Text style={{ fontSize: sizeFont(3.3), marginLeft: 10, color: fontBlack }}>{address}</Text> :
                                    <Text style={{ fontSize: sizeFont(3.3), marginLeft: 10, color: fontBlack2 }}>Alamat Tujuan</Text>
                                // <Text style={{ fontSize: sizeFont(3.3), marginLeft: 10 }}>The Mansion Bougenville, Jl. Trembesi Blok D4, Bandar Baru, Kompleks Kemayoran RW 10, Pademangan Timur, 14410. Jakarta Utara</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.BoxDetail}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Detail Alamat</Text>
                            <TouchableOpacity activeOpacity={0.6} style={{ paddingHorizontal: 10 }} onPress={() => setAddressDetail('')}>
                                <Text style={{ color: MainColor, fontSize: sizeFont(3.3) }}>Hapus</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => refRBSheet.current.open()} activeOpacity={1}>
                            {
                                addressDetail ?
                                    <Text style={{ fontSize: sizeFont(3.3), color: fontBlack, marginVertical: 5 }}>{addressDetail}</Text> :
                                    <Text style={{ fontSize: sizeFont(3.3), color: fontBlack2, marginVertical: 5 }}>Masukkan detail alamat</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('DetailPesanan')} activeOpacity={0.6} style={styles.Btn}>
                    <Text style={{ fontSize: sizeFont(3.5), color: fontWhite, fontFamily: Poppins.Medium }}>Simpan</Text>
                </TouchableOpacity>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={sizeHeight(8)}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'transparent',
                    },
                    draggableIcon: {
                        // backgroundColor: 'transparent',
                        position: 'absolute',
                        top: -999,
                    },
                    container: {},
                }}
            >
                <InputComponent HandleAddresDetail={() => HandleAddresDetail()} setAddressDetail={setAddressDetail} />
            </RBSheet>
        </View>
    );
}

const InputComponent = ({ HandleAddresDetail, setAddressDetail }) => {
    return (
        <View style={styles.BoxInputAddress}>
            <TextInput multiline autoFocus={true} onChangeText={e => setAddressDetail(e)} selectionColor={MainColor} style={styles.Input} placeholder="Masukkan Alamat" />
            <TouchableOpacity onPress={() => HandleAddresDetail()} activeOpacity={0.6} style={styles.BtnOk}>
                <Text style={{ color: fontWhite }}>Ok</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
    map: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // flex: 1,
        height: sizeHeight(55),
        width: SCREEN_WIDTH,
    },
    Content: {
        backgroundColor: bgWhite,
        position: 'relative',
        bottom: 0,
        width: SCREEN_WIDTH,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: sizeHeight(8),
        // borderWidth: 1,
        flex: 1,
    },
    BoxAddress: {
        borderWidth: 1,
        borderColor: borderBlack2,
        marginTop: sizeHeight(1),
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
        position: 'absolute',
        width: SCREEN_WIDTH - 40,
        left: 20,
        bottom: 5,
        backgroundColor: MainColor,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: sizeHeight(2),
    },
    BoxInputAddress: {
        borderTopWidth: 1,
        borderColor: borderBlack2,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BtnOk: {
        backgroundColor: MainColor,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    Input: {
        // borderWidth: 1,
        width: '80%',
    },
});
