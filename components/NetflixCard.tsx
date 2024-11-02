import React from 'react';
import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native';
import { ThemedText } from './ThemedText';

const NetflixCard = () => {

  const handleButtonPress = () => {
    // Open Netflix website using Linking
    
    Linking.openURL('https://www.netflix.com/pk/')
    // .then(() => {
      // alert("hehehe");
    // })
    .catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg' }}
        style={styles.image}
      />
  
      <ThemedText style={styles.title}>Netflix Show</ThemedText>
      <Text>I want to work But And Allah will help </Text>
      <Text>I want to to go to Germany  </Text>
      <Text>Do something</Text>
      <ThemedText style={styles.description}>Watch the latest movies and TV shows on Netflix.</ThemedText>
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
    // fontFamily:"Poppins"
  },
  description: {
    fontSize: 14,
    color: '#AAA',
    textAlign: 'center',
    marginBottom: 20,
    
  },
});

export default NetflixCard;
