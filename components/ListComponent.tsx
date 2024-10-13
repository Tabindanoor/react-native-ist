import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'

const ListComponent = () => {

    const myData=[
        {key: '1', name: 'Item 1'},
        {key: '2', name: 'Item 2'},
        {key: '3', name: 'Item 3'},

    ]

  return (
    <View>
      <ThemedText>ListComponent is Here</ThemedText>

      {/* without de-structuring */}

        <FlatList data={myData} keyExtractor={({key})=>{
            return key
        }} renderItem={(item)=>{
            console.log(item.item.name)
            return(
                <ThemedText>{item.item.name}</ThemedText>
            )
        }}   />

      {/* with de-structuring */}
      
      {/* <FlatList data={myData} renderItem={({item})=>{
        return <Text>{item.name}</Text>
      }} /> */}
    </View>
  )
}

export default ListComponent

const styles = StyleSheet.create({})