import React from 'react';
import { StyleSheet, View, TouchableHighlight, TextInput } from 'react-native';
import { bgBlack2, bgWhite, borderBlack2, fontBlack1 } from '../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizeFont } from '../assets/responsive';

export default function Search({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.BoxSearch}>
                <TouchableHighlight underlayColor={bgBlack2} style={styles.BtnBack} onPress={() => navigation.goBack()} >
                    <Ionicons name="arrow-back" size={sizeFont(6)} color={fontBlack1} />
                </TouchableHighlight>
                <TextInput maxLength={25} placeholder="Search . . ." style={styles.Input} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: bgWhite,
    },
    BoxSearch: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: borderBlack2,
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 5,
    },
    BtnBack: {
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100,
        marginLeft: 10,
    },
    Input: {
        // borderWidth: 1,
        width: '80%',
        marginLeft: 10,
        padding: 5,
        fontSize: sizeFont(4),
        letterSpacing: 0.8,
    },
});
