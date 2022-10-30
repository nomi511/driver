import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {COLORS} from '../assets/styles/colors'
import {User} from '../assets/data/data'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faDollarSign} from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { geojsonData } from '../assets/data/data'
import { isInsidePolygon, isInsideCircle } from 'geofencer'

const Profile = () => {


    let mypoint = [33.66375390029863, 73.00452391015614]
    let poly = [
            [
                33.65743022860528,72.99562184437798
            ],
            [
                33.692422149048014,73.06691995309308
            ],
            [
                33.71285291843455,73.10088800267602
            ],
            [
                33.742777490975584,73.08131956700834
            ],
            [
                33.72650401769155,73.0475482344863
            ],
            [
                33.73175386244243,73.04060459602374
            ],
            [
                33.73031018715187,73.0353968671767
            ],
            [
                33.719022434046494,73.0353968671767
            ],
            [
                33.689834908328805,72.98226702963004
            ],
            [
                33.68568457756771,72.97502646741682
            ],
            [
                33.65743022860528,72.99562184437798
            ]
        ]
    let check = isInsidePolygon(poly,mypoint)
    console.log("\n\n\n\t is it inside the polygon??\n\t"+check+"\n\n")


    return (
        <View style={styles.container}>
            <View style={styles.profileImg}>
                <Image source={User.image} style={{width: '100%', height: '100%', borderRadius: 100}} resizeMode='cover' />
            </View>

            <View style={styles.userDetail}>
                <Text style={styles.title}>{User.name}</Text>
                <View style={styles.detailsTable}>
                    <View style={styles.table1}>
                        <Text style={styles.txt}>Email:</Text>
                        <Text style={styles.txt}>Car:</Text>
                        <Text style={styles.txt}>Location</Text>
                        <Text style={styles.txt}>Join Date</Text>
                    </View>
                    <View style={styles.table2}>
                        <Text style={styles.txt}>{User.email}</Text>
                        <Text style={styles.txt}>{User.car}</Text>
                        <Text style={styles.txt}>{User.city}</Text>
                        <Text style={styles.txt}>{User.start_date}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.btns}>
                <View>
                    <FontAwesomeIcon icon={faDollarSign} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btns}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.btns}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.btns}>

            </TouchableOpacity>

        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.bg,
        alignItems: 'center'
    },
    profileImg:{
        marginTop: 15,
        width: 110,
        height: 110,
        borderWidth: 3,
        borderColor: COLORS.white,
        borderRadius: 100
    },
    title:{
        fontSize:18, 
        fontWeight: 'bold', 
        color: COLORS.black, 
        marginBottom: 15
    },
    userDetail: {
        height: 160,
        width: '80%',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsTable:{
        flexDirection: 'row',
        width: '100%',
    },
    table1:{
        width: '40%',
        marginLeft: 20
    },
    table2:{
        width: '60%'
    },
    txt:{
        fontSize: 14,
        color: COLORS.black
    },
    btns:{
        width:'94%',
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        marginTop: 15
    }
})

export default Profile
