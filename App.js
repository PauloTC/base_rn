import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import About from './src/screens/about';
import Profile from './src/screens/profile';
import Login from './src/screens/login';


const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            path: 'home/',
            navigationOptions: {
                title: 'Esta es el Home',
                headerBackground: "red"
            }
        },
        About,
        Profile,
        Login
    }, 
    { 
        initialRouteName: 'Login',
        navigationOptions: {
            title: 'Un titulo generico',
            headerTitleAllowFontScaling: true,
            headerBackTitle: 'Atras',
            gesturesEnabled: true
        },
        initialRouteKey: 'login',
        initialRouteParams: {
            nombre: 'Paulo Tejada'
        },
        //headerMode :  float screen none
        headerMode: 'float',
        //headerMode :  modal card
        mode: 'card',
        cardStyle: {
            borderWidth: 2,
        },
        headerTransitionPreset: 'uikit'
    })

export default AppNavigator;