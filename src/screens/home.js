import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Switch, Image, ScrollView, Linking, Alert } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import Button from '../components/button'
import {Car, User} from '../assets/data/data'
import {COLORS} from '../assets/styles/colors'
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';


const Home = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    let textValue = isEnabled? "Off":"On"



    navigator.geolocation?.watchPosition(res=>{console.log(res)}, err=>{console.log(err)});


    //location region
    const [region, setregion] = useState(null)

    

    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {

        const openAppSettings = () => {
            if (Platform.OS === 'ios') {
              Linking.openURL("app-settings:");
            } else {
                Linking.openSettings()
            }

            ShowAlert()
        }


        const ShowAlert = () =>{
            if(!region){
                Alert.alert('Location', 'Location Error! Either restart the App or try again', [
                    {text: 'OK', onPress: () => ShowAlert()},
                    {text: 'Try Again', onPress: () => getlocation()},
                ],)
            }
        }


        const getlocation =async() => {
            
            let { status } = await Location.requestBackgroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                Alert.alert('Location', 'Go to settings and give location permission to this app in order to use the app smoothly.', [
                    {text: 'Close', onPress: () => getlocation()},
                    {text: 'Settings', onPress: () => {
                        openAppSettings()
                    }},
                ],)
                
                return;
            }

            

            let location = await Location.getCurrentPositionAsync({});
            setregion({
                latitude: location.coords.latitude, 
                longitude: location.coords.longitude, 
                latitudeDelta: 0.003, 
                longitudeDelta: 0.003
            })

        
        };

        getlocation()













    }, []);




    return (

        <ScrollView
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            bounces={false}
            style={{backgroundColor: COLORS.bg}}
        >


            <View style={styles.container}>
            
                <View style={styles.activeBar}>

                    <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}>Turn <Text style={{color:isEnabled? COLORS.red:COLORS.blue}}>{textValue}</Text></Text>

                    <Switch
                        trackColor={{ false: COLORS.red, true: COLORS.light_blue }}
                        thumbColor={isEnabled ? COLORS.blue : COLORS.white}
                        ios_backgroundColor="#F65E5E"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                </View>
                
                {
                    isEnabled && User.hasAd && <Button title="My Campaign" bgColor='#455A64' titleColor='#ffffff' onClick='Active Campaign'/>
                }

                <View style={styles.midDiv}>
                    <View style={styles.imgView}>
                        <Image source={Car.image} style={{flex:1, width:'100%', height: '100%'}}  resizeMode='contain' />
                    </View>
                    
                    <View style={styles.distanceView}>
                        <View style={styles.details}>
                            <Text style={styles.title}>Today</Text> 
                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text style= {styles.txtdt}>{User.total_distance_today}</Text>
                                <Text style={styles.kmtxt}>km</Text>
                            </View>
                        </View>
                        <View style={[styles.details,{borderLeftWidth: 3,borderLeftColor: COLORS.black}]}>
                            <Text style={styles.title}>Total To Date</Text> 
                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text style= {styles.txtdt}>{User.total_distance_today}</Text>
                                <Text style={styles.kmtxt}>km</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.city}>
                        <Ionicons name="md-compass" size={20} style={{color: COLORS.black}}/>
                        <Text style={{fontSize:14, fontWeight:'500', marginLeft: 5}}>{User.city}</Text>
                    </View>
                </View>

                <View style={styles.location}>

                    <MapView 
                        provider='google'
                        style={styles.mapStyle}
                        initialRegion={region}
                        showsUserLocation={true}
                    />

                </View>

                <View style={{width: '100%', alignItems: 'center', marginBottom: 70}}>
                    <Button title="All Campaigns" bgColor='#455A64' titleColor='#ffffff' onClick='All Campaigns' />
                </View>

        </View>

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems: 'center',
        backgroundColor: COLORS.bg
    },
    activeBar:{
        backgroundColor: COLORS.white,
        width: '60%',
        marginVertical:15,
        borderRadius: 50,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    midDiv:{
        width: '94%',
        height: 300,
        backgroundColor:COLORS.white,
        borderRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative'
    },
    imgView:{
        width: '80%',
        height: '50%',
        borderRadius: 20,
        marginTop:10
    },
    distanceView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop:-20,
        marginBottom: 10
    },
    details:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.blue
    },
    txtdt: {
        fontSize: 35,
        fontWeight: 'bold',
        color: COLORS.black
    },
    kmtxt:{
        marginBottom: 6,
        color: COLORS.black
    },
    city:{
        position: 'absolute',
        alignItems: 'center',
        left: 20,
        flexDirection: 'row',
        width: '90%'
    },
    location:{
        width: '94%',
        height: 300,
        marginVertical: 15,
        borderWidth: 3,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        overflow:'hidden'
    },
    mapStyle:{
        width: '100%',
        height: '100%',
        borderRadius:20
    }
})



export default Home
