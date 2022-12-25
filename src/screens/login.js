import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../assets/styles/colors'
import { useNavigation } from '@react-navigation/core'
import Button from '../components/button'
import { useSelector, useDispatch } from 'react-redux'
import { verified } from '../redux/userSlice'

const Login = () => {

    const navigation = useNavigation()

    const [User, setUser] = useState({
        email:'',
        password:''
    })
    console.log(User)

    // redux
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)

    const runOnClick = ()=>{
        dispatch(verified())
        navigation.reset({
            index: 0,
            routes: [{name:'AppNav'}]
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Adon<Text style={{color: COLORS.blue}}>Carz</Text></Text>

            <View style={styles.inputform}>

                <TextInput 
                    placeholder='Email or username' 
                    style={styles.input}
                    value={User.email}
                    onChangeText={(txt)=>setUser({...User, email: txt})}
                />
                <TextInput 
                    placeholder='Password'
                    style={styles.input}
                    value={User.password}
                    onChangeText={(txt)=>setUser({...User, password: txt})}
                />

                <TouchableOpacity onPress={()=>{navigation.navigate('Forgot Password')}}>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={{width: '100%', alignItems: 'center'}}>
                    <Button title="Sign In" titleColor={COLORS.white} bgColor={COLORS.blue} onClick='AppNav' callback={runOnClick}/>
                </View>

            </View>

            <View style={styles.linkView}>
                <Text style={styles.link}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                    <Text style={{color:COLORS.blue, marginTop: -15, marginLeft: 10}}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.bg,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        fontSize: 38,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: '10%',
        marginBottom:'30%'
    },
    inputform:{
        width: '94%',

    },
    linkView:{
        marginTop:"40%",
        alignItems: 'center',
        flexDirection: 'row'
    },
    link:{
        color:COLORS.black,
        marginBottom: '4%'
    },
    input:{
        backgroundColor: COLORS.white,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        paddingLeft: 20
    }, 
    forgotPass:{
        fontSize: 12,
        color: COLORS.black,
        marginLeft: 20,
        marginVertical: 10
    }
})

export default Login
