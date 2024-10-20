import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

const NetflixCard = () => {

  const handleButtonPress = () => {
    // Replace this with navigation or open Netflix URL
    Alert.alert('Button Pressed', 'Moving towards Netflix!');
  };

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Netflix Show</Text>
      <Text style={styles.description}>Watch the latest movies and TV shows on Netflix.</Text>
      <Button title="Go to Netflix" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#141414',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#AAA',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default NetflixCard;
