import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedText } from './ThemedText';

interface TypeProps {
  firstname: string;
  secondname: string;
}

const CustomComponent = () => {
  const myNameElement = ({ firstname, secondname }: TypeProps): JSX.Element => {
    return <Text>{`My Name is ${firstname} ${secondname}`}</Text>;
  };

  return (
    <View>
      <ThemedText style={styles.container}>CustomComponent is here</ThemedText>
      {myNameElement({ firstname: "Tabinda", secondname: "Noor" })}
    </View>
  );
};

export default CustomComponent;

const styles = StyleSheet.create({
  container: {
     fontSize: 18,
    padding: 10,
  },
});
