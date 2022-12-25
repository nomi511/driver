import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocalStorage = async(key, value)=>{
    try {
        const str = JSON.stringify(value)
        await AsyncStorage.setItem(key, str)
    } catch (error) {
        console.log(error)
    }
}



export const getLocalStorage = async(key)=>{
    try {
        const val = await AsyncStorage.getItem(key)
        return ((val!=null)?JSON.parse(val):null)
    } catch (error) {
        console.log(error)
    }
}


