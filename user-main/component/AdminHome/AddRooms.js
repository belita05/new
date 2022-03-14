import { StatusBar } from 'expo-status-bar'
import {useNavigation} from '@react-navigation/native'
import React, { useState } from 'react';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import FormError from '../Response/FormError';
import FormApprove from '../Response/FormApprove';
import { useRoute } from "@react-navigation/native";

import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';


export default function AddRooms() {
    const route = useRoute();
    const id = route.params.key;
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [cost,setCost] = useState('');
    const [Type,SetType] = useState('');
    const [url,setUrl] = useState('');
    const [ErrMessage,SetErrMessage] = useState('');
    const [successMessage,setSuccessMessage] = useState('');
    const[displayFormErr,setdisplayFormErr] = useState(false);
    const [isLoading,setisLoading] = useState(false); 

 function    uploadImageToStorage(path, imageName){
        let reference = firebase.storage().ref(`images/${imageName}`).put(path);   
           firebase.storage().ref().      
                       
    
      reference
    .then(() => {                                 
            console.log('Image uploaded to the bucket!');
             firebase.storage().ref("images").child(imageName).getDownloadURL().then((url) =>{
                 setUrl(url);
                 
                 setisLoading(false)

                // AddToStore();
             })

        }).catch((e) => {
            SetErrMessage(e);
            setisLoading(false);
            setdisplayFormErr(true);
        }
        
        );
    };
    function AddToStore(uri){
        firebase.firestore().collection("Rooms").add({

            cost:cost,
            type:Type,
            url:url,
            hotelID:id
        }).then(() => {
            setisLoading(false);
            Alert.alert("Room Added");
          });
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    
const Validation = () =>{
    var form_inputs = [cost,Type];

if(form_inputs.includes('') || form_inputs.includes(undefined)){
 SetErrMessage("Please Fill In All The Information");
  return setdisplayFormErr(true);  
}
setisLoading(true);
 uploadImageToStorage(image,image.substring(image.lastIndexOf('/') + 1));
}

  return (
    <View style={styles.container}>
     <View style ={styles.TopView}>
   
     </View>
     <View style ={styles.ButtomView}>
     <Text style={styles.Heading}>Add New Room</Text>
     <Text style={styles.Label}>Enter Room Type</Text>
     <TextInput
   onChangeText={(Type)=>{SetType(Type)}}
        style={styles.input}
        keyboardType="default"
      
      />
        <Text style={styles.Label}>Enter Room Price</Text>
      <TextInput
       onChangeText={(cost)=>{setCost(cost)}}
        style={styles.input}
        keyboardType="default"
        
      />
     
  <TouchableOpacity  onPress={pickImage}  style={styles.Button} >
         <Text style={styles.ButtonText}>Pick an image from camera roll</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Validation}  style={styles.Button} >
         <Text style={styles.ButtonText}>Add New Room</Text>
      </TouchableOpacity>
     </View>
     {displayFormErr == true?
    <FormError   hideErrOverlay= {setdisplayFormErr} err = {ErrMessage}/>
    :
    null
     }
  {isLoading == true?
  <FormApprove  />
    
    :
    successMessage == 'Your Account Has Been Successfully Regitered'?
    <FormApprove  hideErrOverlay= {setdisplayFormErr} successMessage = {successMessage}  ></FormApprove>
    :
    null
    }
        
    
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor:'#fff'
    },
    input: {
        width:'80%',
        color:'#000',
        borderRadius:5,
        height:50,
        backgroundColor:'#fff',
        marginBottom:5,
        borderWidth: 1,
        padding: 10,
      },
    image: {
      flex: 1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    
    },
    TopView: {
      width:'100%',
      height:'30%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    ButtomView:{
      width:'100%',
      height:'70%',

    justifyContent:'flex-end',
alignContent:'center',
alignItems:'center'
    },
    logo:{
      width:'60%',
      resizeMode:'contain',
    },
    Button:{
  width:'80%',
  color:'#fff',
  height:50,
  borderRadius: 5,
  backgroundColor:'#E3AC1E',
  display:'flex',
marginBottom:30,
marginTop: 10,
  justifyContent:'center',
  alignItems:'center'
  
    },    ButtonReg:{
        width:'80%',
        color:'#fff',
        height:50,
        borderRadius:20,
        backgroundColor:'#E37D1E',
        display:'flex',
      marginTop:5,
      marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
        
          },
    ButtonText:{
        color:'#fff',
      fontWeight:'bold',
      fontSize:16  },
      text: {
        color: "white",
        fontSize: 16,
        lineHeight: 50,
        width:'100%',
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      },
      Label:{
        color: "#000",
        fontSize: 15,
        margin:1,
        width:'80%',
        fontWeight: "bold",
        

      },
      Heading:{
        color: "#000",
        fontSize: 30,
        fontWeight:200,
        lineHeight: 50,
        width:'85%',
        fontWeight: "bold",
        textAlign: 'center',

      }
  });
  