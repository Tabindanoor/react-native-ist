import CustomComponent from '@/components/CustomComponent';
import ImageComponent from '@/components/ImageComponent';
import ListComponent from '@/components/ListComponent';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Text, View } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={mystyle.container}>
      <ThemedText style={mystyle.textStyle}>Hello Tabinda Noor, Start your work now</ThemedText>
      {/* <CustomComponent/>
      <ListComponent/>
      <ImageComponent/> */}
    </View>
  );
};

const mystyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex:1,
    alignItems: 'center',
    margin: 40, // Use a numeric value for margin
  },
  textStyle: {
    color: 'red',
  },
});

export default HomeScreen;
