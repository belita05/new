import React,{useState} from 'react';
//import { ListItem } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView, TextInput,Button, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ConfirmBook = () => {
const navigation = useNavigation();


    
    return (
        <>
        <Image style={styles.bed4} source={require("./../assets/bed.png")} >
        </Image>
       

              
        {/* <SafeAreaView style={style.container}>  */}
       

   
        <View style={styles.btn}>
        <View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',width:300,height:50 }}>
       <Button onPress={()=> navigation.navigate("Stripe")} title='Book' color={'#E3AC1E'} ></Button>
       </View>
       </View> 
       {/* </SafeAreaView> */}
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
     bed4: {
    height: 400,
    overflow: 'hidden',
    width: 450
  },

  textInfo:{
      backgroundColor: 'red',
      
  }

 
});
export default ConfirmBook;