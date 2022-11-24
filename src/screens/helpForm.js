import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {COLORS} from '../assets/styles/colors'
import Button from '../components/button'

const HelpForm = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{width: '100%'}}>

                <View style={styles.containerView}>

                    <TextInput 
                        placeholder='Email'
                        style={styles.input}
                    />

                    <TextInput 
                        placeholder='Subject'
                        style={styles.input}
                    />

                    <TextInput 
                        placeholder='Details'
                        style={styles.inputArea}
                    />

                    <View style={styles.uploadFileView}>
                        <TouchableOpacity style={styles.fileBtn}>
                            <Text style={styles.fileBtnTxt}>Choose file</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{width: '100%', alignItems: 'center', marginTop: 50}}>
                        <Button title='Submit' bgColor={COLORS.blue} titleColor={COLORS.white} onClick='Profile' />
                    </View>

                    <Text style={styles.msgTxt}>
                        We will get back to you as soon as possible.
                    </Text>

            </View>
            </ScrollView>
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.bg,
        alignItems: 'center'
    },
    containerView:{
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '3%',
        paddingTop: 20,
    },
    input:{
        width: '100%',
        backgroundColor: COLORS.white,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        paddingLeft: 20
    },
    inputArea:{
        width: '100%',
        backgroundColor: COLORS.white,
        height: 200,
        textAlignVertical: 'top',
        paddingTop: 20,
        borderRadius: 20,
        paddingLeft: 20,
        marginTop: 20
    },
    uploadFileView:{
        width: '100%',
        marginTop: 20,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: COLORS.white
    },
    fileBtn:{
        width: '35%',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 50,
        marginLeft: 10,
        backgroundColor: COLORS.grey
    },
    fileBtnTxt: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    msgTxt:{
        marginTop: 50,
        color: COLORS.black,
        width: '50%',
        textAlign: 'center',
    }
})

export default HelpForm
