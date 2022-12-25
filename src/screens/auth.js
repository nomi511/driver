import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {COLORS} from '../assets/styles/colors'
import Button from '../components/button'

const Auth = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Adsn<Text style={{color: COLORS.blue}}>Cars</Text></Text>
            <View style={styles.btnsView}>
                <Button title='Sign In'  bgColor={COLORS.blue} titleColor={COLORS.white} onClick='Login'/>
            </View>

            <View style={styles.btnsView}>
                <Button title='Create Account' bgColor={COLORS.black} titleColor={COLORS.white} onClick='Register' />
            </View>

            <View style={styles.linkView}>
                <Text style={styles.link}>Terms of use</Text>
                <Text style={styles.link}>Privacy Policy</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.bg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        fontSize: 38,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: '10%',
        marginBottom:'40%'
    },
    btnsView:{
        width:'100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical: 10
    },
    linkView:{
        marginTop:"40%",
        alignItems: 'center'
    },
    link:{
        color:COLORS.black,
        marginBottom: '4%'
    }
})

export default Auth
