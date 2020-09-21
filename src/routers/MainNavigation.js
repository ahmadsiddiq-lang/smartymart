// In App.js in a new project
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainColor } from '../assets/colors';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Daftar from '../pages/Daftar';
import Verifikasi from '../pages/Verifikasi';
import Search from '../pages/Search';
import ListPromo from '../pages/ListPromo';

const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={MainColor} />
            <Stack.Navigator initialRouteName="ListPromo" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Daftar" component={Daftar} />
                <Stack.Screen name="Verifikasi" component={Verifikasi} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="ListPromo" component={ListPromo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;
