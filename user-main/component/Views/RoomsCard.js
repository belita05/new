import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import Lodge from './../../assets/bed.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Nav from './Nav';
import {useNavigation} from '@react-navigation/native'
import firebase from 'firebase';
import { useRoute } from "@react-navigation/native";
import { useState ,useEffect} from 'react';
const RoomsCard = (props) => {
    const[Rooms,setRooms] = useState([]);
    const navigation = useNavigation();
   const HotelID = props.id;
// const [data,setData]=useState()
   const route = useRoute();
   const startDate = route.params.sDate;
   const endDate = route.params.eDate;
   const adultPlus = route.params.Aplus;
   const childPlus = route.params.cPlus;
   const roomPlus = route.params.rPlus;


    useEffect (()=>{
    
        firebase.firestore().collection('Rooms')
        .where('hotelID','==',HotelID)
        .get()
        .then(results=> results.docs)
        .then(docs => docs.map(doc => ({
            id:doc.id,
         cost:doc.data().cost,
         type:doc.data().type,
         url:doc.data().url,
         hotelID:doc.data.hotelID
        })))
        .then(Rooms => setRooms(Rooms)
           
        );
    
      },[]);

    return (
        <View>
             {
        Rooms?.map( room=>
   <View style ={styles.container} > 
         <Image style={styles.logo} source={{uri: room.url}}></Image>
         <Text style = {styles.Hotelname}>Room Information</Text>
         <View style={styles.HotelLocationView} >
         <Ionicons name='cash-outline' color={'#000'} size={20}></Ionicons>
         <Text style= {styles.HotelLocation}>R {room.cost} P/P </Text>
         </View>
         <View style={styles.HotelLocationView} >

             <View style={styles.InfoView} >
             <Ionicons name='bed' color={'#000'} size={20}></Ionicons>
             <Text style={styles.Info } >{room.type}</Text>
             </View>
             <View style={styles.InfoView}>
             <Ionicons name='wifi' color={'#000'} size={20}></Ionicons>
             <Text style={styles.Info}>Wifi</Text>
             </View>
             <View style={styles.InfoView}>
             <Ionicons name='restaurant' color={'#000'} size={20}></Ionicons>
             <Text style={styles.Info}>breakfast</Text>
             </View>
             <View style={styles.InfoView}>
             <TouchableOpacity onPress={()=> navigation.navigate("ConfirmBook",{
                 RoomID:room.id
                ,Price:room.cost,
                sDate:startDate,
                eDate :endDate,
                Aplus:adultPlus,
                cPlus:childPlus,
                rPlus:roomPlus 
                })}  style={styles.Button} >
     <Text style={styles.ButtonText}>Book</Text>
  </TouchableOpacity>
             </View>
         </View>
        
    
    

    </View>
        )
}
        </View>
 
    
    );
}
 
export default RoomsCard;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
      margin:20,
      borderRadius:5,
      height:250,
    },
    logo:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    
        resizeMode:'cover'
    },
    Hotelname:{
        marginTop:5,
     color:'black',
     marginLeft:5,
     fontWeight:'bold',
     fontSize:15,
    },HotelLocationView:{
        flexDirection:'row',
        marginLeft:5,
        paddingBottom:5,
    }
    ,
    HotelLocation:{
        marginLeft:2,
     color:'grey'
    },Info:{
        paddingLeft:3,
    },
    InfoView:{
      
        width:'25%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    Button:{
        width:'80%',
        color:'#000',
        height:35,
        backgroundColor:'#E3AC1E',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
        
          },
          ButtonText:{
            color:"#fff",
            fontWeight:'bold',
         }
});