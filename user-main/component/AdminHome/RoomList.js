import {Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput,ScrollView,Button,View,Text,Alert,Platform,} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import RoomsCard from "../Views/RoomsCard";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


import firebase from "firebase";

export default function RoomList() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.key;
  return (
    <View style={styles.container}>
     
      
      <Text style = {styles.Hotelnames}>Rooms In Hotel</Text>
      <ScrollView  style ={styles.Rooms}>
         
 <RoomsCard id ={id}></RoomsCard>
       </ScrollView>

       <View  style = {styles.ButtonContainer}>
    <TouchableOpacity onPress={()=>   navigation.navigate("AddRooms",{key:id})}  style={styles.Button2} >
     <Text style={styles.ButtonText}>Add New Room</Text>
  </TouchableOpacity>
    </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    height: "60%",
    flex: 1,
    marginTop: 40,
    borderRadius: 10,
  },
  ButtonContainer:{
    display:'flex',
    height:'15%',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'flex-end'
      },
      Button2:{
    width:'80%',
    color:'#000',
    height:40,
    backgroundColor:'green',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  Rooms: {
    height: "40%",
  },

  logo: {
    width: "100%",
    height: 350,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    resizeMode: "cover",
  },
  Hotelname: {
    marginTop: 5,
    color: "black",
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 25,
  },
  Hotelnames: {
    color: "black",
    width: "100%",
    textAlign: "center",
    textDecorationLine: "underline",
    padding: 4,
    margin:10,
    alignContent: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  HotelLocationView: {
    flexDirection: "row",
    marginLeft: 5,
    paddingBottom: 5,
  },
  HotelLocation: {
    marginLeft: 2,
    color: "grey",
  },
  Info: {
    color: "#000",
    paddingLeft: 3,
  },
  InfoView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  Button: {
    width: "80%",
    color: "#000",
    height: 35,
    backgroundColor: "#E3AC1E",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
