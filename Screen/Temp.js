import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screen/Login';

// const Stack = createStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

export default function App() {
  return (
    <View>
       <Login/>
    </View>
   
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
