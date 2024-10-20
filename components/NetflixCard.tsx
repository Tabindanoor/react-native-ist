import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';

interface myDataProps{
    id:number,
    title:string,
    image:string,
}

const data = [
  { id: '1', title: 'Movie 1', image: 'https://via.placeholder.com/300x450' },
  { id: '2', title: 'Movie 2', image: 'https://via.placeholder.com/300x450' },
  { id: '3', title: 'Movie 3', image: 'https://via.placeholder.com/300x450' },
  { id: '4', title: 'Movie 4', image: 'https://via.placeholder.com/300x450' },
];

const NetflixCard = ({ item }:myDataProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const NetflixList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        // horizontal
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
             <NetflixCard item={item} />}
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    marginRight: 10,
    width: Dimensions.get('window').width * 0.35, // Adjust card width
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height * 0.25, // Adjust image height
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default NetflixList;
