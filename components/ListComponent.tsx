import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'

const ListComponent = () => {

    const myData=[
        {key: '1', name: 'Item 1'},
        {key: '2', name: 'Item 2'},
        {key: '3', name: 'Item 3'},
        {key: '4', name: 'Item 4'},
        {key: '5', name: 'Item 5'},
        {key: '6', name: 'Item 6'},
        {key: '7', name: 'Item 7'},
        {key: '8', name: 'Item 8'},
        {key: '9', name: 'Item 9'},
        {key: '10', name: 'Item 10'},
        {key: '11', name: 'Item 11'},


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
                <ThemedText style={styles.list}>{item.item.name}</ThemedText>
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

const styles = StyleSheet.create({
    list:{
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#3aa28b',
        color: 'white',
        borderRadius: 5,
        fontSize: 18,
        fontWeight: 'bold'
    }
})