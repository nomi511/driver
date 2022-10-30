import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import  {COLORS} from '../assets/styles/colors'
import img from '../assets/images/car.png'
import logo from '../assets/images/cola.png'
import { Campaign } from '../assets/data/data'

const CampaginDiv = () => {

    return (
            <View style={styles.campaignDiv}>
                <View style={styles.imgView}>
                    <Image source={img} style={{flex: 1, width: '100%', height: '100%'}} resizeMode='contain' />
                </View>

                <View style={styles.logoTitle}>
                    <View style={styles.logo}>
                        <Image source={logo} style={{flex: 1, width: '100%', height:'100%', borderRadius: 50}} resizeMode='cover' />
                    </View>

                    <View>
                        <Text style={{fontSize: 20, fontWeight:'bold', color:COLORS.black}}>{Campaign.title}</Text>
                        <Text style={{fontSize: 16, fontWeight:'200'}}>Duration: {Campaign.duration} month</Text>
                    </View>
                </View>
            </View>
    )
}



const styles=StyleSheet.create({
    
    campaignDiv:{
        width: '94%',
        height: 230,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgView:{
        width: '80%',
        height: '60%'
    },
    logoTitle: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        alignItems: 'center'
    },
    logo:{
        width: 60, 
        height: 60,
        borderWidth: 3,
        borderRadius: 50,
        marginRight: 10,
        borderColor: COLORS.black,
    }
})



export default CampaginDiv
