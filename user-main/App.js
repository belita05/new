import registerNNPushToken from 'native-notify';
import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import Start from './component/Start';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import Register from './component/Register';
import TabScreen from './component/TabScreen';
import HotelView from './component/HotelView';
import RoomsView from './component/RoomsView';
import Available from './component/Available';
import BookInfo from './component/BookInfo';
import ConfirmBook from './component/ConfirmBook';
import Stripe from './component/Stripe';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HotelList from './component/AdminHome/HotelList'
import AddHotel from './component/AdminHome/AddHotel'
import RoomList from './component/AdminHome/RoomList';
import AddRooms from './component/AdminHome/AddRooms';
import ApprovedPay from './component/ApprovedPay';
import Map from './component/Map';
import firebase from 'firebase';

const Stack = createNativeStackNavigator();

export default function App() {
  registerNNPushToken(2379, 'DSNZ47bYWdlRhSxggJNMDL');
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="start"
          component={Start}
          options={{header: () => null}}
          
        />
        <Stack.Screen name="Login" component={Login} 
           options={{header: () => null}} />
            <Stack.Screen name="Register" component={Register} 
           options={{header: () => null}} />
            <Stack.Screen name="TabScreen" component={TabScreen} 
           options={{header: () => null}} />
             <Stack.Screen name="HotelView" component={HotelView} 
           options={{header: () => null}} />
            <Stack.Screen name="RoomsView" component={RoomsView} 
           options={{header: () => null}} />
             <Stack.Screen name="Available" component={Available} 
           options={{header: () => null}} />
            <Stack.Screen name="HotelList" component={HotelList} 
           options={{header: () => null}} />
           <Stack.Screen name="AddHotel" component={AddHotel} 
           options={{header: () => null}} />
            <Stack.Screen name="RoomList" component={RoomList} 
           options={{header: () => null}} />

<Stack.Screen name="AddRooms" component={AddRooms} 
           options={{header: () => null}} />
           <Stack.Screen name="BookInfo" component={BookInfo}/>
           <Stack.Screen name="ConfirmBook" component={ConfirmBook}/>
           <Stack.Screen name= "Stripe" component={Stripe}/>
           <Stack.Screen name= "ApprovedPay" component={ApprovedPay}/>
           <Stack.Screen name= "Map" component={Map}/>
           
      </Stack.Navigator>
    </NavigationContainer>
    );
  
  
};
