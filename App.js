import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import * as Font from 'expo-font';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Page1 from "./Screen/Page1";
import Login from './Screen/Login';
import SignUp from "./Screen/SignUp";
import Identity from "./Screen/Identity";


 const Stack = createStackNavigator();


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Italic':require("./assets/fonts/Poppins-Italic.ttf"),
      'Poppins-BoldItalic':require('./assets/fonts/Poppins-BoldItalic.ttf'),
      'Poppins-Bold':require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Regular':require('./assets/fonts/Poppins-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Show a loading spinner or null until fonts are loaded
  }
    return (
   
      
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Get Started"  >
      <Stack.Screen name='Get Started' component={Page1} 
      options={{
      headerStyle: {
        backgroundColor: "#42591E",  },
        headerTintColor: '#D9F2D0', 
      headerTitleStyle: {
        fontWeight: 'bold'},
        }} />
       <Stack.Screen name="Identity" component={Identity} options={{
      headerStyle: {
        backgroundColor: "#42591E",  },
        headerTintColor: '#D9F2D0', 
      headerTitleStyle: {
        fontWeight: 'bold'},
        }} />
       <Stack.Screen name="Login" component={Login}  options={{
      headerStyle: {
        backgroundColor: '#D9F2D0',  },
        headerTintColor: "#42591E", 
      headerTitleStyle: {
        fontWeight: 'bold'},
        }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{
      headerStyle: {
        backgroundColor: "#42591E",  },
        headerTintColor: '#D9F2D0', 
      headerTitleStyle: {
        fontWeight: 'bold'},
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}


//








