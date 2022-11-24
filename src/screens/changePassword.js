import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { COLORS } from '../assets/styles/colors'
import Button from '../components/button'
import { useNavigation } from '@react-navigation/core'

const ChangePassword = () => {

    const navigation =useNavigation()

    return (
        <View style={styles.container}>

            <Text style={styles.txtLine}> We need the registered email address to send you the password reset link </Text>

            <TextInput 
                placeholder='Email'
                style={styles.input}
            />

            <Button title='Reset Password' titleColor={COLORS.white} bgColor={COLORS.blue} onClick='New Password' />


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
        paddingHorizontal: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtLine:{
        marginTop: '10%',
        width: '70%',
        textAlign: 'center',
        color: COLORS.black,
        fontSize: 18
    },
    input:{
        width: '94%',
        backgroundColor: COLORS.white,
        height: 50,
        marginTop: '25%',
        marginBottom: '6%',
        borderRadius: 50,
        paddingLeft: 20
    },
    linkView:{
        marginTop:"50%",
        alignItems: 'center',
        flexDirection: 'row'
    },
    link:{
        color:COLORS.black,
        marginBottom: '4%'
    },
})

export default ChangePassword
