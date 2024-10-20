import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface PropsForPropsDrilling{
    source: ImageSourcePropType; 
}

const PropsDealing = (props:PropsForPropsDrilling) => {
  return (
    <View>
        <Image source={props.source} style={styles.myImage} />
        
    </View>
  )
}

export default PropsDealing

const styles = StyleSheet.create({
    myImage:{
        width: 100,
        height: 100,
       
 
    }
})