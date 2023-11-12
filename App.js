import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SafeViewAndroid from './components/SafeViewAndroid';

export default function App() {
  return (
    <View style={SafeViewAndroid.AndroidSafeArea}>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
