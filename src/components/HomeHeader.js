import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

const HomeHeader = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Adon<Text style={styles.innerTxt}>Carz</Text></Text>
            </View>
            
            <TouchableOpacity style={styles.profile} onPress={()=>navigation.navigate('Profile')}>
                <Ionicons name='md-person' size={18} style={{color: '#455A64'}}  />
            </TouchableOpacity>

        </View>
    )
}



const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        width: '100%',
    },
    txt:{
        fontSize: 24,
        fontWeight: 'bold',
        color:'#455A64'
    },
    innerTxt:{
        color: '#01ADFF'
    },
    profile:{
        borderWidth: 1,
        width: 26,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#455A64'
    },

})

export default HomeHeader
