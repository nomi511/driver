import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {COLORS} from '../assets/styles/colors'
import Button from '../components/button'
import MapView, {Geojson} from 'react-native-maps'
import CampaginDiv from '../components/campaginDiv'
import {User, Campaign, geojsonData} from '../assets/data/data'


const ActiveCampagin = () => {

    return (
        <ScrollView
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            bounces={false}
            style={{backgroundColor: COLORS.bg}}>

            <View style={styles.container}>

                <View style={{width: '100%', alignItems: 'center', marginTop: 30, position: 'relative'}}>
                    <CampaginDiv />
                    <View style={styles.daysView}>
                        <Text style={{color:COLORS.red, fontSize: 11, fontWeight: 'bold'}}>{User.ad_detail.days_remaining} Days Remaining</Text>
                    </View>
                </View>

                <View style={styles.startView}>
                    <Text style={styles.startDate}>Started At:</Text>
                    <Text style={styles.startDate}>{User.ad_detail.start_date}</Text>
                </View>

                <View style={styles.activeDetails}>

                    <View style={styles.locDetail}>
                        <Text style={styles.locTitle}>Location:</Text>
                        <Text style={styles.loc}>"{Campaign.location}"</Text>
                    </View>

                    <View style={[styles.distToday,{width: '100%',marginTop: 10,borderTopWidth: 3, borderColor:COLORS.grey}]}>
                        <Text style={styles.titleStyle}>Distance Today</Text>
                        <View style={styles.distTodayView}>
                            <Text style={styles.valueStyle}>{User.ad_detail.daily_distance}</Text>
                            <Text style={styles.unitStyle}>km</Text>
                        </View>
                    </View>

                    <View style={styles.distDetails}>
                        <View style={styles.distArea}>
                            <Text style={styles.titleStyle}>Total Distance</Text>
                            <View style={styles.distView}>
                                <Text style={styles.valueStyle}>{User.ad_detail.total_distance}</Text>
                                <Text style={styles.unitStyle}>km</Text>
                            </View>
                        </View>
                        <View style={styles.incomeArea}>
                            <Text style={styles.titleStyle}>Total Income</Text>
                            <View style={styles.incomeView}>
                                <Text style={[styles.unitStyle, {marginRight: 3}]}>Rs</Text>
                                <Text style={styles.valueStyle}>{User.ad_detail.total_income}</Text>
                            </View>
                        </View>
                    </View>

                </View>


                <View style={styles.mapView}>
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
                            strokeColor='red'
                            strokeWidth={2}
                        />

                    </MapView>
                </View>

                <View style={{width: '100%', alignItems: 'center', marginBottom: 70}}>
                    <Button title='End' bgColor={COLORS.red} titleColor={COLORS.black} onClick='Home' />
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
    daysView:{
        position: 'absolute',
        top:-14,
        right:25,
        borderRadius: 50,
        backgroundColor: COLORS.black,
        paddingHorizontal: 13,
        paddingVertical: 8
    },
    startView:{
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6
    },
    startDate:{
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.black
    },
    activeDetails:{
        width: '94%',
        height: 290,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    locDetail:{
        alignItems: 'center'
    },
    locTitle:{
        fontSize: 20,
        color:COLORS.black
    },
    loc:{
        fontSize: 20,
        color: COLORS.black,
        fontWeight: 'bold',
        marginVertical: 5
    },
    distToday:{
        alignItems: 'center'
    },
    distTodayView:{
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    distView:{
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    incomeView:{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center'
    },
    distDetails:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        borderTopWidth: 3,
        borderColor: COLORS.grey

    },
    titleStyle:{
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: COLORS.blue
    },
    valueStyle:{
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.black
    },
    unitStyle:{
        fontSize: 16,
        fontWeight: 'bold',
        color:COLORS.black,
        marginTop:10,
        marginLeft: 3
    },
    incomeArea:{
        width: '50%',
        alignItems: 'center',
        borderLeftWidth: 3,
        borderColor: COLORS.grey
    },
    distArea:{
        width: '50%',
        alignItems: 'center'

    },

    mapView:{
        width: '94%',
        height: 330,
        marginVertical: 15,
        backgroundColor: COLORS.white,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: COLORS.white
    },
    mapStyle:{
        width: '100%',
        height: '100%',
        borderRadius: 20
    }

})



export default ActiveCampagin
