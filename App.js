import React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native'

const App = () => {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Hello World!!</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />
      <Button
        color='red'
        title='press me'
        onPress={() => Alert.alert('Hello')}
      />  

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  title: { fontSize: 30, color: 'black' },
  image: { height: 150, width: 150, borderRadius: 90 }
  
})

export default App;