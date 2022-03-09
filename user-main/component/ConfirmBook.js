import React,{useState} from 'react';
//import { ListItem } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView, TextInput,Button, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ConfirmBook = () => {
const navigation = useNavigation();


    
    return (
        <>
        <Image style={style.bed4} source={require("./../assets/bed.png")} >
        </Image>
       

              
        {/* <SafeAreaView style={style.container}>  */}
        <Text>check In: 2022-03-09</Text>
        <Text>check Out: 2022-03-09</Text>
        <Text>Guests: 2</Text>
        <Text>Room: 1</Text>

   
        <View style={style.btn}>
        <View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',width:300,height:50 }}>
       <Button onPress={()=> navigation.navigate("Stripe")} title='Book' color={'#E3AC1E'} ></Button>
       </View>
       </View> 
       {/* </SafeAreaView> */}
        </>
    )
}
const style = StyleSheet.create({
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

  details:{
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      backgroundColor: '#ffffff', 
      marginLeft: 10,

      
  }
});
export default ConfirmBook;