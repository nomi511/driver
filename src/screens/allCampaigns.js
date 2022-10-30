import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView, TouchableOpacity } from 'react-native'
import  {COLORS} from '../assets/styles/colors'
import { useNavigation } from '@react-navigation/core'
import CampaginDiv from '../components/campaginDiv'


const AllCampaigns = () => {

    const navigation = useNavigation()

    return (
        <ScrollView
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            bounces={false}
            style={{backgroundColor: COLORS.bg}}
        >

            <View style={styles.container}>
                <TouchableOpacity style={{alignItems: 'center', width:'100%', marginTop: 15}} onPress={()=>{navigation.navigate('Campaign Details')}}>
                    <CampaginDiv />
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems: 'center', width:'100%', marginTop: 15}} onPress={()=>{navigation.navigate('Campaign Details')}}>
                    <CampaginDiv />
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems: 'center', width:'100%', marginTop: 15}} onPress={()=>{navigation.navigate('Campaign Details')}}>
                    <CampaginDiv />
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}



const styles=StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        paddingBottom: 70
    },
    campaignDiv:{
        width: '94%',
        height: 230,
        borderRadius: 20,
        marginTop: 15,
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



export default AllCampaigns
