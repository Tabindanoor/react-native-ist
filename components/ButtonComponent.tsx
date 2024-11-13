import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText';
import { TouchableOpacity } from 'react-native';

const ButtonComponent = () => {
  return (
    <View>
      <ThemedText style={styles.mystyleisHere}>ButtonComponent</ThemedText>
      <ThemedText>Difference between button and toucable opacity</ThemedText>
      <Button
        title='This is button '
        onPress={()=>{
            console.log("pressed the single button onPress");
            
            alert("hehe pressed the button")
            alert("hehe pressed the button")
        }}
        color='#841584'
        
        accessibilityLabel='Learn more about this button'
        disabled={false}
        testID='button'
        
      />

      <TouchableOpacity
      
      onPress={()=>{
        console.log("pressed the touchable opacity onPress");
        
        alert("hehe pressed the touchable opacity")
    }}
      >
        <ThemedText>I am toucable opacity</ThemedText>

        <Image  style={styles.imgaStyle} source={require('.././assets/images/pic.jpg')}/>

        <Button title='TouchableOpacity'  />
      </TouchableOpacity>

      <ThemedText>I am toucable opacity</ThemedText>
      <ThemedText>I am toucable opacity</ThemedText>
      <ThemedText>I am toucable opacity</ThemedText>
      <ThemedText>I am toucable opacity</ThemedText>

    </View>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    imgaStyle:{
        width: 200,
        height: 150,
        resizeMode: 'contain'
    },
    mystyleisHere:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
      marginTop: 20,
      textAlign: 'center'
    }
})