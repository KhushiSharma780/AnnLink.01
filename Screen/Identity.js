import React from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";


import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default Identity;

const img1 = require("./Image/pg_2_1.png")
const img2 = require("./Image/pg_2_2.png")


function Identity({navigation}){
    return (
        <View style={styles.container}>


        <View style={styles.top}>
             <Text style={styles.top_text}>
                 Lets get Started
             </Text>
             <Text style={styles.descipt}>
                  Who are you ?
            </Text>
            <Image
                source={img1}
                style={{ marginTop:0, position:'absolute', right:0 }}
            />
        </View>



        <View style={styles.middle}>
            <Text style={styles.mid_text}>
                 I am 
            </Text>
          
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
               <Text style={styles.buttonText}>  <Ionicons name="people" size={32} color="#D9F2D0" />     Farmer</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.buttonText}>  <AntDesign name="shoppingcart" size={32} color="#D9F2D0" />     Customer </Text>
            </TouchableOpacity>
        </View>



        <View style={styles.bottom} >

            <Text style={{fontSize:20,color:'#42591E'}}>
              Already have an account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize:30,color:'#42591E',fontWeight:'bold',}}>
              Login
            </Text>
            </TouchableOpacity>
            
            <Image
                source={img2}
                style={{ marginTop:0, position:'absolute', left:0 }}
            />
        </View>
       </View>
  
    );
}

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      backgroundColor: "#D9F2D0",   
      flexDirection: "column", 
    },
  
  // ===============================TOP SECTION ==================================>
  
  
    top:
    {
      flex:1,
      width:'100%',
    },
  
    top_text:
    {
      fontSize: 35,
      color:"#42591E",
      position:'absolute',
      left:'10%',
      top:'30%',
      fontFamily:"Poppins-Bold"
    },
  
    descipt:
    {
      fontSize: 24,
      position:'absolute',
      left:'10%',
      top:'50%',
      color:"#42591E",   
      fontFamily:"Poppins-Regular"
    },
  
  
    // =============================== MIDDLE SECTION ==============================>
  
  
      //--------------TEXT--------------------
    middle:
    {
      flex:1,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
  
    mid_text:
    {
      fontSize: 45,
      color:'#42591E',
      fontFamily:"Poppins-Bold"
    },
  
    //----------------BUTTON--------------------
  
  
    button: {
      width: '80%', 
      height: 60, 
      backgroundColor: '#42591E', 
      justifyContent: 'center', 
     
      marginVertical: 10,
      borderRadius:12
    },
    buttonText: {
      color: '#D9F2D0', 
      fontSize:35, 
      fontFamily:"Poppins-Bold"
    },
  
  
  
    //================================ BOTTOM SECTION ==============================>
  
    bottom:
    {
      width:'100%',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      fontFamily:"Poppins-Regular"
    },
  
  
  
  
  }
  )
  