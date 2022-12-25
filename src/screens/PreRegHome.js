import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {COLORS, COLROS} from '../assets/styles/colors'
import Button from '../components/button'
import { useSelector } from 'react-redux'

import { getLocalStorage } from '../helpers/localStorage'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import authNav from '../navigation/authNav'
import { useDispatch } from 'react-redux'
import { tokenReset } from '../redux/userSlice'

const PreRegHome = () => {

    const reduxData = useSelector(state=>state.user)
console.log(reduxData)
    const navigation = useNavigation()

    // const clearStorage = async()=>{
    //     try {
    //         await AsyncStorage.clear()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // clearStorage()

    const getValue = async()=>{
        const val = await getLocalStorage('userinfo')
        if(!val){
            navigation.reset({
                index: 0,
                routes:[{name: 'Auth Nav'}]
            })
        }
    }
    getValue()

    const dispatch= useDispatch();
    dispatch(tokenReset())

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Adon<Text style={{color: COLORS.blue}}>Carz</Text></Text>
            
            <Text style={styles.wlcm}>WELCOME!</Text>

            { !reduxData.user? (
            
                <View style={styles.beforeUpload}>
                    
                    <View style={styles.txtView}>
                        <Text style={styles.txt}>To proceed further you need to provide the necessary details in order to complete your profile.
                            <Text style={{color: COLORS.red}}>Click </Text>
                            on the button below to complete the profile.
                        </Text>
                    </View>

                    <Button title="Complete Profile" bgColor={COLORS.blue} titleColor={COLORS.white} onClick='RegDocsForm' />

                </View>
            ):(
                <View style={styles.beforeUpload}>
                    <View style={styles.txtView}>
                        <Text style={styles.txt}>You have successfuly uploaded the required documents. we will review them and get back to you within
                            <Text style={{color: COLORS.red}}> 2 working days </Text>
                        </Text>
                        <Text style={[styles.txt, {color: COLORS.blue}]}>We appreciate your patience</Text>
                    </View>
                </View>
            )}
            
            
        </View>
    )
}



const styles= StyleSheet.create({
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
    wlcm:{
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: '10%'
    },
    beforeUpload:{
        width:'94%',
        justifyContent: 'center',
        alignItems:"center",
        marginBottom: '50%'
    },
    txtView:{
        width: '90%',
        marginVertical: 40,
    },
    txt:{
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,
        textAlign: 'justify',
        marginVertical: 10
    }
})

export default PreRegHome
