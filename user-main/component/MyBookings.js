import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import HotelCard from './Views/HotelCard'
import Nav from './Views/Nav';
import firebase from 'firebase';
import { useEffect } from 'react';
import Bookings from './Views/Bookings';

export default function MyBookings() {
 
  return (
    <View style={styles.container}>
      
      <ScrollView>
        <Nav text={'My Bookings'}></Nav>
        <Bookings></Bookings>
      </ScrollView>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#fff',
  
  },
  info: {
    backgroundColor: 'red',
    borderRadius: 10,
    flexDirection: 'column'
    
    

  },
  textInfo:{
    fontSize: 20,
    flexDirection: 'column'
  }
});
