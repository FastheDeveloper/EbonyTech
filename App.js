import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Splashscreen from './src/screens/Splashscreen';

NavigationContainer
export default function App() {
  const [fontsLoaded] = useFonts({
    EuclidBoldI: require('./assets/fonts/Euclid-Circular-A-Bold-Italic.ttf'),
    EuclidBold: require('././assets/fonts/Euclid-Circular-A-Bold.ttf'),
    EuclidItalics: require('././assets/fonts/Euclid-Circular-A-Italic.ttf'),
    EuclidLightI: require('./assets/fonts/Euclid-Circular-A-Light-Italic.ttf'),
    EuclidLight: require('./assets/fonts/Euclid-Circular-A-Light.ttf'),
    EuclidRegular: require('./assets/fonts/Euclid-Circular-A-Regular.ttf'),
    EuclidMedium: require('./assets/fonts/Euclid-Circular-A-Medium.ttf'),
    EuclidMediamI: require('./assets/fonts/Euclid-Circular-A-Medium-Italic.ttf'),
    EuclidSemiBold: require('./assets/fonts/Euclid-Circular-A-SemiBold.ttf'),
    EuclidSemiBoldI: require('./assets/fonts/Euclid-Circular-A-SemiBold-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return <Splashscreen />;
  }
  return (
    <NavigationContainer>
     <Navigation/>

     

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
