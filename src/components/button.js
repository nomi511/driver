import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Button = ({title, bgColor, titleColor, onClick, callback}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={[styles.container,{backgroundColor:bgColor}]} onPress={()=>{
            return (onClick? (navigation.navigate(onClick)):(callback()))
        }}>
            <Text style={{color: titleColor, fontSize: 20, fontWeight:'bold'}}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    container:{
        width: '94%',
        height: 50,
        borderRadius: 50,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 15
    }
})

export default Button
