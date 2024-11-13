import { StyleSheet, View, FlatList, Text } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'

const ListComponent = () => {
  const myData = [
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
    { key: '4', name: 'Item 4' },
    { key: '5', name: 'Item 5' },
    { key: '6', name: 'Item 6' },
    { key: '7', name: 'Item 7' },
    { key: '8', name: 'Item 8' },
    { key: '9', name: 'Item 9' },
    { key: '10', name: 'Item 10' },
    { key: '11', name: 'Item 11' },
  ]

  return (
    <View style={styles.view}>
      <ThemedText >ListComponent is Here with  </ThemedText>

      <FlatList
        data={myData}
        keyExtractor={(item) => item.key }
        showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        // numColumns={2}

        // for horizontally aligned lists
        // horizontal
        renderItem={({ item }) => (
          <ThemedText style={styles.list}>{item.name}</ThemedText>
        )}
        contentContainerStyle={{ paddingBottom: 20 }} // Optional: Adds spacing at the bottom
      />

      
    </View>
  )
}

export default ListComponent

const styles = StyleSheet.create({
  list: {
    margin: 5,
    padding: 5,
    backgroundColor: '#3aa28b',
    color: 'white',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  view: {
    flex:1,
    padding: 5,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
})
