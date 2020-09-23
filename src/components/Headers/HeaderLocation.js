/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bgWhiteRGBA1, fontBlack2, borderBlack2 } from '../../assets/colors';
import { sizeFont, SCREEN_WIDTH } from '../../assets/responsive';
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
                        query={{
                            key: 'AIzaSyB6lpShDkjUcV-ukqGAQPPozr-T8H1F7Nk',
                            language: 'id',
                        }}
                        styles={{
                            container: {},
                            textInputContainer: {
                                flex: 1,
                                backgroundColor: 'transparent',
                            },
                            textInput: {
                                backgroundColor: 'transparent',
                            },
                            listView: {},
                            description: {},
                            row: {
                                padding: 10,
                            },
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            padding: 10,
                            paddingVertical: 10,
                            position: 'absolute',
                            right: 0,
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
