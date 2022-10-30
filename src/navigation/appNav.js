import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, AllCampaigns, CampaignDetails,ActiveCampagin,Profile } from "../screens";
import { StyleSheet } from "react-native";
import HomeHeader from "../components/HomeHeader";


import React from 'react'
import { View, Text } from 'react-native'


const Stack = createStackNavigator()

const AppNav = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>

                <Stack.Navigator initialRouteName={'Home'} >

                    <Stack.Screen 
                        name="Home" 
                        component={Home} 
                        options={{headerTitle: (props)=><HomeHeader />
                        }}
                    />
                    <Stack.Screen name="All Campaigns" component={AllCampaigns}/>
                    <Stack.Screen name="Campaign Details" component={CampaignDetails}/>
                    <Stack.Screen name="Active Campaign" component={ActiveCampagin}/>
                    <Stack.Screen name="Profile" component={Profile}/>

                </Stack.Navigator>

            </NavigationContainer>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E3EAED'
    }
})



export default AppNav
