import React, {useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import  {Auth, Login, Register, EmailVerification, ChangePassword} from '../screens'
import AppNav from './appNav'
import { COLORS } from '../assets/styles/colors';
import { tokenCheck } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
 
 
const Stack = createStackNavigator()

const AuthNav = () => {

    const reduxData = useSelector(state=>state.user)
    console.log('reduxd data: ', reduxData)
    
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(tokenCheck())
    }, [])
    


    return (
        <View style={styles.container}>
                <Stack.Navigator initialRouteName='Auth'>
                    {reduxData.token?(<>
                        <Stack.Screen name="AppNav" component={AppNav} />
                    </>):(<>
                        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
                        <Stack.Screen name="Email Verification" component={EmailVerification} options={{ headerShown: false }}/>
                        <Stack.Screen name="Forgot Password" component={ChangePassword} options={{headerTitle:'Change Password'}}/>
                    </>)}
                </Stack.Navigator>
        </View>
    )
}



const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.bg
    }
})

export default AuthNav
