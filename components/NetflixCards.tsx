import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { ThemedText } from './ThemedText';

interface DataProps {
  id: string;
  title: string;
  image: string;
  content: string;
}

const data: DataProps[] = [
  {
    id: "1",
    title: "Themed Text",
    image: "https://picsum.photos/200/300",
    content: "This is a component for displaying text in different themes.",
  },
  {
    id: "2",
    title: "ButtonComponent",
    image: "https://picsum.photos/200/300",
    content: "This is a component for displaying a button.",
  },
  {
    id: "3",
    title: "CardComponent",
    image: "https://picsum.photos/200/300",
    content: "This is a component for displaying a card.",
  },
  {
    id: "4",
    title: "ImageComponent",
    image: "https://picsum.photos/200/300",
    content: "This is a component for displaying an image.",
  },
  {
    id: "5",
    title: "NetflixCards",
    image: "https://picsum.photos/200/300",
    content: "This is a component for displaying a list of Netflix movies/shows.",
  },
  {
    id: "6",
    title: "NetflixCard",
    image: "https://picsum.photos/200/300",
    content: "This is a component for displaying a single Netflix movie/show.",
  },
];

const NetflixCards = () => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.header}>NetflixCards</ThemedText>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NetflixCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    // backgroundColor: '#f9f9f9',
    // borderRadius: 4,
    // padding: 4,
    // marginBottom: 10,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: '#333',
  },
});
