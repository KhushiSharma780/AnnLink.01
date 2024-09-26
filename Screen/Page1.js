import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";


import AntDesign from '@expo/vector-icons/AntDesign';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const logoImg = require("./Image/Logo.png");
const Ellipse_bottom = require("./Image/Ellipse_1.png");


export default Page1;

 function Page1({navigation}) {
  return (

    <View style={styles.container}>

      
      {/* ===========================  TOP SECTION ===============================*/}
      <View style={styles.top}>
        <Image
          source={logoImg}
          style={{ width: 300, height: 300, marginTop: 40 }}
        />
      </View>

      {/* ========================= BOTTOM SECTION =============================*/}

      <View style={styles.bottom}>
        <Image
          source={Ellipse_bottom}
          style={{ resizeMode: "contain", width: 450, height: windowHeight < 800 ? 480 : 600 }}
        />             

      </View>

      <View style={styles.Discription}>
          <Text style={styles.text}>
            Connecting Farmers to Consumers,One Click at a Time.
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Identity')}>
            <Text style={styles.buttonText}>GET STARTED <AntDesign name="forward" size={26} color="#white" /></Text>
           
          </TouchableOpacity>
        </View>

    </View>
  );
}



// ====================== DESIGNING ======================

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: "#D9F2D0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", 
  },

  top:  
  {
    flex: 1.2,
    alignItems: "center",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  bottom: 
  {
    flex: 1.8,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  Discription:
  {
    paddingTop:70,
    bottom:windowHeight < 800 ? -100 : -20 ,
    position: "absolute",
    height: 500,
    width: 300,
    color:"#D9F2D0",
  },

  text:
  {
    fontSize: 30,
    color:"#D9F2D0",
    fontFamily:'Poppins-Italic'
  },

  button:
  {
    marginTop:100,
    justifyContent:'center',
    alignItems:'center',
    fontSize:90,   
    width:"100%"
  },

  buttonText:
  {
    fontSize: 30,
    width:220,
    backgroundColor:'#D9F2D0',
    padding:10,
    color:"#42591E",
    borderRadius:30,
    fontWeight:"800",
    fontFamily:"Poppins-BoldItalic"
  }
  
});
