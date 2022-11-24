import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, AllCampaigns, CampaignDetails,ActiveCampagin,Profile, ChangePassword, PreRegHome,RegDocsForm, EditProfile,HelpForm,NewPassword} from "../screens";
import { StyleSheet } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { useSelector } from "react-redux";
import React from 'react'
import { View, Text } from 'react-native'
 

const Stack = createStackNavigator()

const AppNav = () => {

    const user = useSelector(state=>state.user)

    return (
        <View style={styles.container}>

            <Stack.Navigator initialRouteName={'Home'} >

                {!user.verified? (<>
                    <Stack.Screen name="PreRegHome" component={PreRegHome} options={{ headerShown: false }} />
                    <Stack.Screen name="RegDocsForm" component={RegDocsForm} options={{headerTitle:'Details Form'}}/>
                </>): (<>
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
                    <Stack.Screen name="Forgot Password" component={ChangePassword} options={{headerTitle:'Change Password'}} />
                    <Stack.Screen name="Edit Profile" component={EditProfile}/>
                    <Stack.Screen name="Help" component={HelpForm}/>
                    <Stack.Screen name="New Password" component={NewPassword} options={{headerTitle:'New Password'}}/>
                </>)
                
            }

            </Stack.Navigator>
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
