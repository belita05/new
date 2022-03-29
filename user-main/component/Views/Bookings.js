import React from "react";

import {
    Pressable,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    Button,
    View,
    Text,
    Alert,
    Platform,
  } from "react-native";
  import firebase from "firebase";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


const Bookings  = () => 
{
    const [Hotel,SetHotel] = useState([]);
    const[Room,setRoom]=useState([]);
      const [Bookings,SetBookings]= useState([]);


      useEffect(() => {
        firebase
          .firestore()
          .collection("Bookings")
          .where("UserID", "==", firebase.auth().currentUser.uid)
          .get()
          .then((results) => results.docs)
          .then((docs) =>
            docs.map((doc) => ({

                
              id: doc.id,
              Adults :doc.data().Adults,
              Children:doc.data().Children,
              EndDate:doc.data().EndDate,
              RoomID:doc.data().RoomID,
              Roomms:doc.data().Roomms,
              StartDate:doc.data().StartDate,
              TotalCost:doc.data().TotalCost,
              hotelName: doc.data().hotelName
            }))
          )
          .then((Bookings) => SetBookings(Bookings))
          .then(
              
          );
      }, []);
    

//     function User({ userId }) {
//   useEffect(() => {
//     const subscriber = firestore()
//       .collection('Hotels')
//       .doc(userId)
//       .onSnapshot(documentSnapshot => {
//         console.log('User data: ', documentSnapshot.data());
//       });

//     // Stop listening for updates when no longer required
//     return () => subscriber();
//   }, [userId]);
// }
    return(
        
        <View style={styles.container}>
            {Bookings?.map((Booking) => (
        <View style={styles.info}>
        <Text style={styles.textInfo}>Hotel Name : {Booking.hotelName} </Text>
          <Text style={styles.textInfo}>Number of Guests : {Booking.Adults + Booking.Children}</Text>
          <Text style={styles.textInfo}>Number of Rooms : {Booking.Roomms}</Text>
          <Text style={styles.textInfo}>Total Amount : R{Booking.TotalCost}</Text>
          <Text style={styles.textInfo}>Check-In Date : {Booking.StartDate}</Text>
          <Text style={styles.textInfo}>Check-Out Date : {Booking.EndDate}</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Register")} >
           <Text style={styles.ButtonText}>Cancel</Text>
            </TouchableOpacity>
          
         </View>
         ))}
         
    </View> 
    )
     

}
export default Bookings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        margin: 10,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'column',
    },
    info: {

      backgroundColor: "#ecf0f1",
  marginTop: 10,
  borderRadius: 10
  
    
    
    },

    textInfo:{
      fontSize: 15,
      fontWeight:'bold',
      flexDirection: 'column',
      padding: 5

    },
    ButtonText:{
      backgroundColor: 'grey',
      width: 70,
      justifyContent: 'center',
      textAlign: 'center',
      marginBottom: 20,
      margin: 20,
      borderRadius: 10,
      
      

    }
  });
  