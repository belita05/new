import React,{useState} from 'react';
//import { ListItem } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView, TextInput,Button, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ConfirmBook = () => {
const navigation = useNavigation();

const route = useRoute();
    
  const id = route.params.key;
const startDate = route.params.sDate;
const endDate = route.params.eDate;
const adultPlus = route.params.Aplus;
const childPlus = route.params.cPlus;
const roomPlus = route.params.rPlus;
const price = route.params.Price;
const Total = adultPlus+childPlus;
 const Amount = roomPlus* price*2;  
    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      
        <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          resizeMode={"cover"}
          source={{
              uri: "https://images.unsplash.com/photo-1613618902610-95d88084ee11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
        </View>
        <View View style={styles.textInfo}>
        <Text style={styles.Text} >Check In Date: {startDate}</Text>
        <Text style={styles.Text}>Check Out Date: {endDate}</Text>
        <Text style={styles.Text} >Number Of Guests:{Total} </Text>
        <Text style={styles.Text} >Total Price : {Amount} </Text>
        </View>

        <View style ={styles.ButtomView}>
  <TouchableOpacity onPress={()=> navigation.navigate("Stripe")}  style={styles.Button} >
  <Text style={styles.ButtonText}>Finalize booking</Text>
  </TouchableOpacity>
  </View>
       
  </SafeAreaView>
        
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

    imgContainer: {
    width: "100%",
    height: 400,
    overflow: "hidden",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
   },
   img: {
   width: "100%",
   height: "100%",
   },
   ButtomView:{
   width:'100%',
   height:'60%',
   alignItems:'center'
   },
  Button:{
  width:'80%',
  color:'#000',
  height:50,
  borderRadius:5,
  backgroundColor:'#E3AC1E',
  marginBottom:60,
  justifyContent:'center',
  alignItems:'center'

  },
  ButtonText:{
  color:"#fff",
  fontWeight:'bold',
  fontSize:16  },

    textInfo:{
        flexDirection: 'column',
        padding:20 ,
    },
    Text:{
      fontSize:20,
      padding:10
    }

 
});
export default ConfirmBook;