import React, {useRef} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import {COLORS} from '../assets/styles/colors'
import { useSelector } from 'react-redux'
import Button from '../components/button'
import { ScrollView } from 'react-native-gesture-handler'
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-crop-picker';


const EditProfile = () => {

    const user = useSelector(state=>state.user)


    // showing action sheet for  image picking
    let actionsheet = useRef()
    const BUTTONS = ['Take Photo', 'Choose From Library', 'Cancel']
    const chooseImg = ()=>{
        actionsheet.current.show()
    }

    const chooseFromGallery = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }

    const takePicture = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }


    return (
        <View style={styles.container}>

            <ScrollView>
                <View style={styles.scrollDiv}>

                    <TouchableOpacity style={styles.imgView} onPress={()=> chooseImg()}>
                        <Image source={user.image} style={{width: '100%', height: '100%', borderRadius:100}} />
                        <View style={styles.selectImgView}>
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: COLORS.blue}}>Select</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.midView}>

                        <View style={styles.titleView}>
                            <Text style={styles.txtTitle}>Name</Text>
                            <Text style={styles.txtTitle}>Email</Text>
                            <Text style={styles.txtTitle}>City</Text>
                            <Text style={styles.txtTitle}>Address</Text>
                        </View>

                        <View style={styles.inputView}>
                            <TextInput 
                                placeholder='Enter name'
                                style={styles.input}
                            />

                            <TextInput 
                                placeholder='Enter email'
                                style={styles.input}
                            />

                            <TextInput 
                                placeholder='Enter current city'
                                style={styles.input}
                            />

                            <TextInput 
                                placeholder='Enter permanent address'
                                multiline={true}
                                numberOfLines={5}
                                style={styles.inputArea}
                            />

                        </View>

                    </View>

                    <View style={{width: '94%', alignItems: 'center', marginVertical: 40}}>
                        <Button title="Save" bgColor={COLORS.blue} titleColor={COLORS.white} onClick='Profile' />
                    </View>
                    
                </View>
            </ScrollView>

            <ActionSheet 
                ref={actionsheet}
                title='Choose a Photo'
                options={BUTTONS}
                cancelButtonIndex={2}
                onPress={(indexclicked)=>{
                    switch(indexclicked){
                        case 0:
                            takePicture()
                            break
                        case 1:
                            chooseFromGallery()
                            break
                        default:
                            break
                    }
                }}
            />
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    scrollDiv:{
        alignItems: 'center'
    },
    imgView:{
        marginTop: 25,
        width: 110,
        height: 110,
        borderWidth: 3,
        borderColor: COLORS.white,
        borderRadius: 100
    },
    selectImgView:{
        position: 'absolute',
        left: '20%',
        bottom: -10,
        backgroundColor: COLORS.white,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    midView:{
        width: '90%',
        marginTop: 20,
        flexDirection: 'row'
    },
    titleView:{
        width: '20%'
    },
    txtTitle:{
        height: 50,
        textAlignVertical: 'center',
        marginTop: 20,
        color: COLORS.black
    },
    inputView:{
        width: '80%'
    },
    input:{
        backgroundColor: COLORS.white,
        height: 50,
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 20
    }, 
    inputArea:{
        backgroundColor: COLORS.white,
        height: 140,
        textAlignVertical: 'top',
        paddingTop: 20,
        borderRadius: 20,
        paddingLeft: 20,
        marginTop: 20
    },
})



export default EditProfile
