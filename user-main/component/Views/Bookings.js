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
              TotalCost:doc.data().TotalCost
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
        <Text style={styles.textInfo}>Hotel Name : </Text>
        <Text style={styles.textInfo}>Room Type : </Text>
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
        backgroundColor: "#ecf0f1",
        margin: 5,
        borderRadius: 10,
        padding: 10,
    
    },
    info: {
     
    
  
    },
    textInfo:{
      fontSize: 15,
      fontWeight:'bold',
      flexDirection: 'column'
    }
  });
  