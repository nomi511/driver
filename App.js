import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './src/navigation/authNav'
import { Provider } from 'react-redux';
import store from './src/redux/store'
 
export default function App() {

  const barHeight = Constants.statusBarHeight

  return (
    <View style={[styles.container, {paddingTop:barHeight}]}>
      <Provider store={store}>
        <StatusBar/>
          <NavigationContainer>
            <AuthNav />
          </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
