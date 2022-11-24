import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { COLORS } from '../assets/styles/colors'
import Button from '../components/button'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'
import { verified } from '../redux/userSlice'

const Register = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

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
                    placeholder='Name' 
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Email'
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
                    style={styles.input}
                />

                <View style={{width: '100%', alignItems: 'center', marginVertical: 40}}>
                    <Button title="Register" titleColor={COLORS.white} bgColor={COLORS.blue} onClick='AppNav' callback={runOnClick} />
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
