import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { COLORS } from '../assets/styles/colors'
import Button from '../components/button'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, reset } from '../redux/userSlice';

const Register = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()


    // inputs
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    console.log(newUser)
    

    // registering user
    const runOnClick = async()=>{
        await dispatch(reset())
        await dispatch(registerUser(newUser))
        
        setNewUser({
            name: '',
            email: '',
            password: ''
        })
    }

    
    
    //const msg = 'Confirmation code is sent to your email address.'
    const {error, isLoading, msg} = useSelector(state=>state.user)
    console.log({
        'Error': error,
        "Loading":isLoading,
        "message": msg 
    })

    if(!isLoading && !error && msg==='Confirmation code is sent to your email address.'){
        setTimeout(()=>navigation.navigate('Email Verification'), 0) 
    }

    

    useEffect(() => {
        dispatch(reset())
        console.log('----------------USEEFFECT--------------')
      
    }, [dispatch])

    if(isLoading){
        return (
            <View style={styles.container}>
                <Text style={{
                    textAlign:'center', 
                    fontWeight: 'bold', 
                    fontSize: 24, 
                    color: COLORS.black
                }}>Loading...</Text>
            </View>
        )
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Adon<Text style={{color: COLORS.blue}}>Carz</Text></Text>

            <View style={styles.inputform}>

                <TextInput 
                    placeholder='Name' 
                    style={styles.input}
                    value={newUser.name} 
                    onChangeText={(txt)=>setNewUser({...newUser, name: txt})}
                />
                <TextInput 
                    placeholder='Email'
                    style={styles.input}
                    value={newUser.email} 
                    onChangeText={(txt)=> setNewUser({...newUser, email: txt})}
                />
                <TextInput 
                    placeholder='Password'
                    style={styles.input}
                    value={newUser.password} 
                    onChangeText={(txt)=>setNewUser({...newUser, password: txt})}
                />

                <View style={{width: '100%', alignItems: 'center', marginVertical: 40}}>
                    <Button title="Register" titleColor={COLORS.white} bgColor={COLORS.blue} callback={runOnClick} />
                </View>

            </View>

            <View style={styles.linkView}>
                <Text style={styles.link}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={{color:COLORS.blue, marginTop: -15, marginLeft: 10}}>Sign In</Text>
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
        alignItems:'center'
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
        marginTop:"20%",
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
    }
})

export default Register
