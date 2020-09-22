/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bgWhiteRGBA1, fontBlack2, borderBlack2 } from '../../assets/colors';
import { sizeFont, SCREEN_WIDTH } from '../../assets/responsive';
import { Poppins } from '../../assets/fonts/Poppins';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Component } from 'react';

export default class HeaderLocation extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Box}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={0.6} style={styles.BtnBack}>
                        <Ionicons name="chevron-back" size={sizeFont(6)} color={fontBlack2} />
                    </TouchableOpacity>
                    {/* <TextInput style={styles.Input} placeholder="Cari Lokasi" /> */}
                    <GooglePlacesAutocomplete
                        placeholder="Cari Lokasi"
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'default'}
                        onPress={(data, detail) => this.props.handlePosition(data, detail.geometry)}
                        fetchDetails={true}
                        // textInputHide={true}
                        textInputProps={{
                            clearButtonMode: 'never',
                            ref: input => {
                                this.textInput = input;
                            },
                        }}
                        renderRightButton={() => (
                            <TouchableOpacity
                                style={{
                                    padding: 5,
                                    // borderWidth: 1,
                                    justifyContent: 'center',
                                }}
                                onPress={() => {
                                    this.textInput.clear();
                                }}
                            >
                                <Ionicons
                                    name="close-circle"
                                    size={sizeFont(6)}
                                    color={fontBlack2}
                                />
                            </TouchableOpacity>
                        )}
                        query={{
                            key: 'AIzaSyB6lpShDkjUcV-ukqGAQPPozr-T8H1F7Nk',
                            language: 'id',
                        }}
                        styles={{
                            container: {
                                // position: 'absolute',
                                // top: 0,
                                // zIndex: 1,
                                // borderBottomWidth: 1,
                                // borderBottomColor: borderBlack2,
                            },
                            textInputContainer: {
                                flex: 1,
                                // paddingHorizontal: 20,
                                backgroundColor: 'transparent',
                                // backgroundColor: bgWhiteRGBA1,
                                // borderRadius: 10,
                            },
                            textInput: {
                                backgroundColor: 'transparent',
                                // borderWidth: 1,
                                // margin: 0,
                                // borderRadius: 10,
                                // height: 40,
                                // padding: 0,
                                // fontFamily: Poppins.Regular,
                                // shadowColor: '#000',
                                // shadowOpacity: 0.1,
                                // shadowOffset: { x: 0, y: 0 },
                                // shadowRadius: 15,
                                // borderWidth: 1,
                                // borderColor: '#DDD',
                            },
                            listView: {
                                // width: SCREEN_WIDTH / 1.1,
                                // borderWidth: 1,
                                // backgroundColor: '#FFF',
                                // borderColor: '#DDD',
                                // marginHorizontal: 20,
                                // marginTop: 10,
                                // shadowColor: '#000',
                                // shadowOffset: { x: 0, y: 0 },
                                // shadowRadius: 15,
                                // shadowOpacity: 0.1,
                                // borderRadius: 8,
                                // marginLeft: -20,
                                // zIndex: 2,
                            },
                            description: {},
                            row: {
                                padding: 10,
                            },
                        }}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        width: SCREEN_WIDTH,
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
        // paddingHorizontal: 20,
    },
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        // // marginLeft: 10,
        paddingHorizontal: 30,
        backgroundColor: bgWhiteRGBA1,
        borderRadius: 10,
    },
    Input: {
        // borderWidth: 1,
        width: '90%',
    },
    BtnBack: {
        padding: 10,
        paddingVertical: 10,
        position: 'absolute',
        top: 0,
        // borderWidth: 1,
    },
});
