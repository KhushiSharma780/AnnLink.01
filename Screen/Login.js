import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Button,
    TextInput,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Logo = require("./Image/Logo.png");
const P4_1 = require("./Image/P4_1.png");
const P4_2 = require("./Image/P4_2.png");

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '100%',
                    height: 100,
                    alignItems:'center',
                    marginTop: 10,
                }}
            >
                <Image source={Logo} style={{ width: 100, height: 100 }}></Image>
            </View>
            <View
                style={{
                    marginLeft: windowWidth < 400 ? 310 : 350,
                    width: 90,
                    marginTop: 50,
                }}
            >
                <Image source={P4_1}></Image>
            </View>

            <View style={{ width: windowWidth < 400 ? 200 : 250, marginBottom: 0 }}>
                <Image
                    source={P4_2}
                    style={{ width: windowWidth < 300 ? 0 : 90 }}
                ></Image>
            </View>
            <View style={{ marginTop: windowHeight < 900 ? -450 : -400,width:"100%",alignItems:"center"}}>
                <Text
                    style={{
                        color: "#D9F2D0",
                        fontSize: 32,
                        fontWeight: "900",
                        fontFamily:"Poppins-BoldItalic"
                       }}
                >
                    LOGIN
                </Text>
            </View>
           <View style={{alignItems:"center",justifyContent:"center",height:400}}>
           <View style={styles.Boxcontainer}>
                {
                    //================Username============
                }
                <Text style={{ color: "#D9F2D0", fontSize: 16,fontFamily:"Poppins-Regular" }}>
                    Enter email or username
                </Text>
                <TextInput style={styles.input}  />

                {
                    //================Password============
                }
                <Text style={{ color: "#D9F2D0", fontSize: 16,fontFamily:"Poppins-Regular" }}>Enter password</Text>
                <TextInput style={styles.input} />

                {
                    //================Lo============
                }
                <TouchableOpacity
                    style={{
                        backgroundColor: "#D9F2D0",
                        marginTop: 0,
                        borderRadius: 10,
                        height: 50,
                    }}
                >
                    <Text
                        style={{
                            color: "#42591E",
                            width: 350,
                            paddingVertical: 5,
                            fontSize: 30,
                            marginLeft: 20,
                            fontWeight: "800",
                            paddingHorizontal: windowWidth < 400 ? 70 : 100,
                            fontFamily:"Poppins-Bold"
                        }}
                    >

                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            </View> 
           
            <View
                style={{
                    marginTop:  windowHeight < 800 ? 50 : 100,
                     marginHorizontal: windowWidth < 400 ? 80 : 120,
                    width:"100%"
                }}
            >
                <Text style={{ color: "#D9F2D0", marginHorizontal: 50, fontSize: 22 ,fontFamily:"Poppins-Regular"}}>
                    New user?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text
                        style={{ color: "#D9F2D0", marginHorizontal: 60, fontSize: 22 ,fontFamily:"Poppins-Regular"}}
                    >
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#42591E",
    },
    Boxcontainer: {
        backgroundColor: "#42591E",
        // marginTop: 80,
        // marginHorizontal: 40,
        padding: 20,
        borderRadius: 20,
        elevation: 30,
        shadowOpacity: 30,
        shadowColor: "black",
        shadowRadius: 20,
        borderColor: "#D9F2D0",
        borderWidth: 2,
        height: 300,
        width: windowWidth < 400 ? 300 : 350,
        // marginLeft: 50,
    },
    input: {
        borderWidth: 2,
        borderColor: "#D9F2D0",
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        marginTop: 20,
        color:"#D9F2D0"
    }
});
export default Login;