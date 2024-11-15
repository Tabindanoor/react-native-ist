import ButtonComponent from '@/components/ButtonComponent';
import CustomComponent from '@/components/CustomComponent';
import ImageComponent from '@/components/ImageComponent';
import ListComponent from '@/components/ListComponent';
import NetflixCard from '@/components/NetflixCard';
import NetflixList from '@/components/NetflixCard';
import NetflixCards from '@/components/NetflixCards';
import PropsDealing from '@/components/PropsDealing';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      <View style={mystyle.container}>
      <ThemedText style={mystyle.textStyle}>Hello Tabinda Noor, Start your work now</ThemedText>
      <CustomComponent/>
      {/* <ListComponent/> */}
      {/* <ButtonComponent/> */}
      {/* <ImageComponent/>  */}

      {/* <PropsDealing source={require('../../assets/images/pic.jpg')} /> */}

      {/* <PropsDealing source={require('../../assets/images/pic.jpg')}  /> */}

      {/* <NetflixCard/> */}
      <NetflixCards/>
    </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  
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
