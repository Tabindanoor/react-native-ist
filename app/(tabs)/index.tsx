import CustomComponent from '@/components/CustomComponent';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={mystyle.container}>
      <Text style={mystyle.textStyle}>Hello Tabinda Noor, Start your work now</Text>
      <CustomComponent/>
    </View>
  );
};

const mystyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 40, // Use a numeric value for margin
  },
  textStyle: {
    color: 'red',
  },
});

export default HomeScreen;
