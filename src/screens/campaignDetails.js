import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import CampaignDiv from '../components/campaginDiv'
import {COLORS} from '../assets/styles/colors'
import { Campaign } from '../assets/data/data'
import MapView,{Geojson}from 'react-native-maps'
import {geojsonData} from '../assets/data/data'
import Button from '../components/button'

const CampaignDetails = () => {
    return (
        <ScrollView
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            bounces={false}
            style={{backgroundColor: COLORS.bg}}
        >

            <View style={styles.container}>

                <View style={{width: '100%', alignItems: 'center', marginTop: 15}}>
                    <CampaignDiv />
                </View>

                <View style={styles.details}>
                    <View style={styles.locView}>
                        <Text style={styles.locTitle}>Location:</Text>
                        <Text style={styles.locStyle}>"{Campaign.location}"</Text>
                    </View>

                    <View style={styles.detailsRow}>
                        <View style={styles.rangeView}>
                            <Text style={styles.titleStyle}>Daily Minimum</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.detailStyle}>{Campaign.daily_minimum}</Text>
                                <Text style={styles.unitStyle}>km</Text>
                            </View>
                        </View>
                        
                        <View style={styles.priceView}>
                            <Text style={styles.titleStyle}>Est. Income</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.unitStyle}>Rs</Text>
                                <Text style={styles.detailStyle}>{Campaign.estimated_income}</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.location}>
                    <MapView
                        provider='google'
                        initialRegion={{
                            latitude: 33.6907,
                            longitude: 73.0057,
                            latitudeDelta: 0.15,
                            longitudeDelta: 0.15 
                        }}
                        style={styles.mapStyle}
                    >
                        <Geojson 
                            geojson={geojsonData} 
                            strokeColor="red"
                            strokeWidth={2}
                        />
                    </MapView>
                </View>

                <View style={{width: '100%', alignItems: 'center', marginBottom: 70}}>
                    <Button title='Join' bgColor={COLORS.black} titleColor={COLORS.white} onClick='Active Campaign' />
                </View>

            </View>
        </ScrollView>
    )
}



const styles=StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    details:{
        width: '94%',
        height: 220,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },
    detailsRow:{
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    locView:{
        width: '100%',
        alignItems: 'center'
    },
    locTitle:{
        fontSize: 20,
        color: COLORS.black
    },
    locStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: COLORS.black
    },

    rangeView: {
        width: '50%',
        alignItems: 'center',
    },

    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.blue
    },
    detailStyle:{
        fontSize: 28,
        marginTop: 10,
        fontWeight: 'bold',
        marginLeft: 3,
        color: COLORS.black
    },
    unitStyle: {
        fontSize: 16,
        color:COLORS.black,
        height: '100%',
        fontWeight: 'bold',
        marginTop:19
    },

    priceView: {
        width: '50%',
        alignItems: 'center',
        borderLeftWidth: 3,
        borderColor: COLORS.black
    },
    location:{
        width: '94%',
        height: 330,
        borderWidth: 3,
        borderColor: COLORS.white,
        borderRadius: 20,
        marginBottom: 15,
        overflow:'hidden'
    },
    mapStyle:{
        width: '100%',
        height: '100%',
        borderRadius: 20
    }
})



export default CampaignDetails
