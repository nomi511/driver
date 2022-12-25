import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import {COLORS} from '../assets/styles/colors'
import Button from '../components/button'
import { verifyUserEmail,reset } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getLocalStorage } from '../helpers/localStorage'
import { useNavigation } from '@react-navigation/native'


const EmailVerification = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [confirmationCode, setConfirmationCode] = useState('')
    console.log(confirmationCode);

    const {error, isLoading, msg} = useSelector(state=>state.user)
    console.log({
        'Error': error,
        "Loading":isLoading,
        "message": msg 
    })


    const runOnClick = async()=>{
        const {id} = await getLocalStorage('userinfo')
        if(id){
            console.log('finally: ', id)
            dispatch(verifyUserEmail({userID: id,OTP: confirmationCode }))
        }
    }

    if(!isLoading && !error && msg==='Email verified successfully.'){
        setTimeout(()=>navigation.navigate('AppNav'), 0) 
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
      <Text style={styles.logo}>Adsn<Text style={{color: COLORS.blue}}>Cars</Text></Text>

      <View style={{width: '94%'}}>
        <Text style={{color: COLORS.black, marginLeft: 20}}>Enter Confirmation Code:</Text>
        <TextInput 
            placeholder='Confirmation Code'
            style={styles.input}
            value={confirmationCode}
            onChangeText={(txt)=>{setConfirmationCode(txt)}}
        />
      </View>

      <Button title='Confirm Email' titleColor={COLORS.white} bgColor={COLORS.blue} callback={runOnClick} />

    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '50%'
    },
    logo:{
        fontSize: 38,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: '10%',
        marginBottom:'30%'
    },
    input:{
        backgroundColor: COLORS.white,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        paddingLeft: 20,
        marginBottom: 20
    }
})

export default EmailVerification