import React from "react";
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';


const Stack = createStackNavigator()

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <Text style={styles.title}>My First App</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />

      <Button title="Products"
        onPress={() => navigation.navigate('ProductsScreen')}

      />

    </View>
  );
}

const ProductsScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='Products' component={ProductsScreen} />
      </Stack.Navigator>

    </NavigationContainer>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    color: 'black'
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 90
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    color: 'white'
  }

})



export default App;