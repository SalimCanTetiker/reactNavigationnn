import React from 'react';
import { Button, Text, View, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}
const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>ProfileScreen</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})