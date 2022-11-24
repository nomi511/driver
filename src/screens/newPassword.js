import React from 'react'
import { View, Text , StyleSheet, TextInput} from 'react-native'
import {COLORS} from '../assets/styles/colors'
import Button from '../components/button'


const NewPassword = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.logo}>Adon<Text style={{color: COLORS.blue}}>Carz</Text></Text>

            <Text style={styles.inputLable}>Enter your new Password</Text>       

            <TextInput 
                placeholder='New password'
                style={styles.input}
            />
            <Button title='Update Password' titleColor={COLORS.white} bgColor={COLORS.blue} onClick='Home' />

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.bg,
        paddingHorizontal: '2%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        fontSize: 38,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: '-40%',
        marginBottom:'30%'
    },
    input:{
        width: '94%',
        backgroundColor: COLORS.white,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        paddingLeft: 20,
        marginBottom: '10%'
    },
    inputLable:{
        width: '100%',
        paddingLeft: '9%',
        fontSize: 18,
        fontWeight: '400',
        color: COLORS.black
    }
})

export default NewPassword
 