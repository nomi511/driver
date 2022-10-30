import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import MyNav from './src/navigation/appNav'

export default function App() {

  const barHeight = Constants.statusBarHeight

  return (
    <View style={[styles.container, {paddingTop:barHeight}]}>
      <StatusBar/>
      <MyNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
