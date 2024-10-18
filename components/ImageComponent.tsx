import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'

const ImageComponent = () => {
  return (
    <View>
      <ThemedText>ImageComponent</ThemedText>    
        {/* <Image source={require('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2F&psig=AOvVaw14ZXf05YWf1qHxl0xyFXQT&ust=1729346045149000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCyrp6KmIkDFQAAAAAdAAAAABAE')}/> */}
        <Image source={require('.././assets/images/pic.jpg')} style={styles.img1}/>
        <Image source={require('.././assets/images/pic.jpg')} style={styles.img2}/>
      </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({
  img1:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10
  },
  img2:{
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10
  }
})