import React from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import { COLORS } from '../assets/styles/colors'
import Button from '../components/button'


const RegDocsForm = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{width: '100%'}}>
            
                <TextInput 
                    placeholder="Mobile number"
                    keyboardType='numeric'
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Address"
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Current City"
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Car"
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Car model"
                    keyboardType='numeric'
                    style={styles.input}
                />

                <Text style={styles.fileTitle}>Files</Text>

                <View style={styles.docView}>

                    <View style={styles.uploadTitle}>
                        <Text style={styles.title}>Profile image</Text>
                        <Text style={styles.title}>Driving License</Text>
                        <Text style={styles.title}>Car image</Text>
                        <Text style={styles.title}>Car registration</Text>
                    </View>

                    <View style={styles.uploadBtn}>
                        <TouchableOpacity onPress={()=>{}}><Text style={[styles.title, {color:COLORS.blue}]}>Upload</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}><Text style={[styles.title, {color:COLORS.blue}]}>Upload</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}><Text style={[styles.title, {color:COLORS.blue}]}>Upload</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}><Text style={[styles.title, {color:COLORS.blue}]}>Upload</Text></TouchableOpacity>
                    </View>

                </View>


                <View style={styles.finalBtn}>
                    <Button title='Upload' bgColor={COLORS.blue} titleColor={COLORS.white} onClick='PreRegHome' />
                </View>


            </ScrollView>
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.bg,
        alignItems: 'center'
    },
    input:{
        backgroundColor: COLORS.white,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        paddingLeft: 20,
        width:'94%',
        marginLeft: '3%'
    },
    fileTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '6%',
        marginVertical: 15,
        color: COLORS.black
    },
    docView:{
        width: '94%',
        marginLeft: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 20
    },
    title:{
        fontSize: 16,
        color: COLORS.black,
        marginTop:15,
    },
    finalBtn:{
        width: '100%',
        marginVertical: 40,
        alignItems: 'center'
    }

})

export default RegDocsForm
