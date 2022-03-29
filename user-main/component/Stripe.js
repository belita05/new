import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { CreditCardInput } from "react-native-credit-card-input";
import { Secret_key,  STRIPE_PUBLISHABLE_KEY} from './Keys';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from "@react-navigation/native";
import firebase from 'firebase';

const CURRENCY = 'USD';
var CARD_TOKEN = null;


function getCreditCardToken(creditCardData){
  
  const card = {
    'card[number]': creditCardData.values.number.replace(/ /g, ''),
    'card[exp_month]': creditCardData.values.expiry.split('/')[0],
    'card[exp_year]': creditCardData.values.expiry.split('/')[1],
    'card[cvc]': creditCardData.values.cvc
  };
  return fetch('https://api.stripe.com/v1/tokens', {
    headers: {
      // Use the correct MIME type for your server
      Accept: 'application/json',
      // Use the correct Content Type to send data to Stripe
      'Content-Type': 'application/x-www-form-urlencoded',
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
    },
    // Use a proper HTTP method
    method: 'post',
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(card)
      .map(key => key + '=' + card[key])
      .join('&')
  }).
  then(response => response.json())
  .catch((error)=>console.log(error))
};
/**
 * The method imitates a request to our server.
 *
 * @param creditCardToken
 * @return {Promise<Response>}
 */
 function subscribeUser(creditCardToken){
  return new Promise((resolve) => {
    console.log('Credit card token\n', creditCardToken);
    CARD_TOKEN = creditCardToken.id;
    setTimeout(() => {
      resolve({ status: true });
    }, 1000);
  });
};

const Stripe= () => {

  const navigation = useNavigation();
 

const route = useRoute();
const Amount = route.params.tPrice;
const startDate = route.params.sDate;
const endDate = route.params.eDate;
const adultPlus = route.params.Aplus;
const childPlus = route.params.cPlus;
const roomPlus = route.params.rPlus;
const hotelName = route.params.hotelName;
const  RoomID = route.params.RoomID;
const UserID = firebase.auth().currentUser.uid
 console.log(hotelName);
  const [CardInput, setCardInput] = React.useState({})

  const onSubmit = async () => {

    if (CardInput.valid == false || typeof CardInput.valid == "undefined") {
      alert('Invalid Credit Card');
      return false;
    }

    let creditCardToken;
    try {
      // Create a credit card token
      creditCardToken = await getCreditCardToken(CardInput);
      // console.log("creditCardToken", creditCardToken)
      if (creditCardToken.error) {
        alert("creditCardToken error");
        return;
      }
    } catch (e) {
      console.log("e",e);
      return;
    }
    // Send a request to your server with the received credit card token
    const { error } = await subscribeUser(creditCardToken);
    // Handle any errors from your server
    if (error) {
      alert(error)
    } else {
     
      let pament_data = await charges();
   //   console.log('pament_data', pament_data);
      if(pament_data.status == 'succeeded')
      {
        console.log('payment done');
        firebase.firestore().collection("Bookings").add({
          RoomID: RoomID,
          UserID:UserID,
          TotalCost:Amount,
          Adults:adultPlus,
          Children:childPlus,
          Roomms:roomPlus,
          StartDate:startDate,
          EndDate:endDate,
          hotelName:hotelName
      }).then(() => {
          alert("Payment Successfully");
          navigation.navigate("TabScreen")
          
        });
     

      }
      else{
        alert('Payment failed');
        navigation.navigate("BookInfo")
      }
    }
  };



  const charges = async () => {

    const card = {
        'amount': 50, 
        'currency': CURRENCY,
        'source': CARD_TOKEN,
        'description': "Developers Sin Subscription"
      };

      return fetch('https://api.stripe.com/v1/charges', {
        headers: {
          // Use the correct MIME type for your server
          Accept: 'application/json',
          // Use the correct Content Type to send data to Stripe
          'Content-Type': 'application/x-www-form-urlencoded',
          // Use the Stripe publishable key as Bearer
          Authorization: `Bearer ${Secret_key}`
        },
        // Use a proper HTTP method
        method: 'post',
        // Format the credit card data to a string of key-value pairs
        // divided by &
        body: Object.keys(card)
          .map(key => key + '=' + card[key])
          .join('&')
      }).then(response => response.json());
  };
  


  const _onChange =(data) => {
    setCardInput(data)
  }

  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#2471A3" />
        <Image 
        source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Stripe_logo%2C_revised_2016.png/1200px-Stripe_logo%2C_revised_2016.png'}}
        style={styles.ImgStyle}
        />
        <CreditCardInput 
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        validColor="#fff"
        placeholderColor="#ccc"
        onChange={_onChange} />
 
{/* <TouchableOpacity onPress={()=> navigation.navigate("ApprovedPay")}  style={styles.Button} >
     <Text style={styles.ButtonText}>Pay Now {Amount}</Text>
  </TouchableOpacity> */}

      <TouchableOpacity 
      onPress={onSubmit}
      style={styles.button}>
        <Text
          style={styles.buttonText}>
          Pay Now {Amount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  ImgStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  button : {
    backgroundColor:'#2471A3',
    width:150,
    height:45,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    borderRadius:5
  },
  ButtomView:{
    width:'100%',
    height:'60%',
    display:'flex',
justifyContent:'flex-end',
alignItems:'center'
  },

  Button:{
width:'90%',
color:'#000',
height:50,
borderRadius:5,
backgroundColor:'#E3AC1E',
display:'flex',
margin:20,
justifyContent:'center',
alignItems:'center'

  },
  ButtonText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:16  },
 
  inputContainerStyle : {
    backgroundColor:'#fff',
    borderRadius:5
  },
  inputStyle : {
    backgroundColor:'#222242',
    paddingLeft:15,
    borderRadius:5,
    color:'#fff'
  },
  labelStyle : {
    marginBottom:5,
    fontSize:12
  }
 
})
export default Stripe;