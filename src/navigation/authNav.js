import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import  {Auth, Login, Register, PreRegHome, RegDocsForm, ChangePassword} from '../screens'
import AppNav from './appNav'
import { COLORS } from '../assets/styles/colors';

 

const Stack = createStackNavigator()

const authNav = () => {

    const [user, setUser] = useState(false)

    return (
        <View style={styles.container}>
            <NavigationContainer>
                
                <Stack.Navigator initialRouteName='Auth' screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Auth" component={Auth} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="AppNav" component={AppNav} />
                    <Stack.Screen name="Forgot Password" component={ChangePassword} options={{headerTitle:'Change Password'}}/>

                </Stack.Navigator>

            </NavigationContainer>
        </View>
    )
}



const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.bg
    }
})

export default authNav
