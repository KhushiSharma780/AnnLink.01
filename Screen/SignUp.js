import { StatusBar } from "expo-status-bar";
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions
} from "react-native";
import React, { useState } from 'react';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const windowHeight = Dimensions.get("window").height;

const Logo = require("./Image/Logo.png")
const Ellipse5 =require("./Image/Ellipse 5.png");
const  Ellipse6 =require("./Image/Ellipse 6.png");

export default SignUp;


 function SignUp({navigation}){
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function resetInputHandler(){
    setEmailOrUsername('');
    setPassword('');
    setReenteredPassword('');
  }

  // Validate email using regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate username (4-15 alphanumeric characters)
  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
    return usernameRegex.test(username);
  };

  // Validate password
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = () => {
    // Check if it's a valid email or username
    if (!validateEmail(emailOrUsername) && !validateUsername(emailOrUsername)) {
      Alert.alert('Please enter a valid email or username (4-15 characters).');
      return;
    }

    // Check if password meets criteria
    if (!validatePassword(password)) {
      Alert.alert('Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.');
      return;
    }

    // Check if passwords match
    if (password !== reenteredPassword) {
      Alert.alert('Passwords do not match.');
      return;
    }

    setErrorMessage('');
    Alert.alert('Success!', 'All fields are valid.');
  };
 return(
    <View style={styles.container}>
     
      <View style={styles.header}>
       
      <Image source={Logo} style={{height:130,width:130,position:"absolute",top:"10%"}} />
      <Text style={{color:'#42591E',fontSize:40,top:"28%",fontWeight:"800" ,fontFamily:"Poppins-BoldItalic"}}>Sign Up</Text>
      <Image source={Ellipse5} style={{height:150,width:140,position:"absolute",top:"0%",right:"-10%"}} />
    
     
     <View  style={styles.footer}>
     
     </View>
      <View style={{width:"100%",top:"35%"}}>
    <Image source={Ellipse6} style={{height:230,width:100,marginLeft:-40}}/>
    </View> 
     
     <View style={styles.Boxcontainer}>
        
      <TextInput
        style={styles.input}
        placeholder="Enter email or username"
        value={emailOrUsername}
        onChangeText={setEmailOrUsername}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Re-enter password"
        value={reenteredPassword}
        onChangeText={setReenteredPassword}
        secureTextEntry
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

    

      <Button title="Submit" color= "#42591E"  onPress={handleSubmit} style={{borderRadius:20,fontFamily:'Poppins-BoldItalic'}} />
     </View>

     <Text style={{color:'#42591E',fontSize:28,top: windowHeight < 800 ? "-7%" : "-10%",fontWeight:'800',fontFamily:'Poppins-Italic'}}>Or</Text>
   

     <TouchableOpacity style={{backgroundColor:'#42591E',top:"-7%",borderRadius:10,height:50,alignContent:'center',justifyContent:'center',}}>
        <Text style={{color:'#D9F2D0',width:"100%",fontFamily:"Poppins-BoldItalic",
          paddingVertical:10,fontSize:20, 
          paddingHorizontal:20}}><FontAwesome5 name="google" size={26} color="#D9F2D0" />   Sign Up with Google</Text>
       </TouchableOpacity>

      </View> 
   
    </View>
 );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#D9F2D0',
  },
  Boxcontainer: {
    backgroundColor:'#D9F2D0',
    top: windowHeight < 800 ? "-7%" : "-15%",
    marginHorizontal:0,
     padding:20,
    borderRadius:20,
    elevation:30,
    shadowOpacity:30,
    shadowColor:'black',
    shadowRadius:20,
    borderColor:'#42591E',
    borderWidth:2,
    height:300,
    width:300,
   

   },
   Textinput:{
     height:40,
     borderColor:'#42591E',
     borderWidth:1,
     padding:10,
     marginVertical:10,
     borderRadius:10
   },

   input: {
     borderWidth: 2,
     borderColor: '#42591E',
     padding: 10,
     marginBottom: 20,
     borderRadius: 10,
     fontFamily:"Poppins-Italic"
   },
   error: {
     color: 'red',
     marginBottom: 15,
   },
  header:{
   flex:1,
   
   justifyContent:'center',
   alignItems:'center',
  
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    top:"-20%"
    
  }
  });