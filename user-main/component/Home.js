import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert , Feather} from 'react-native';
import firebase from 'firebase';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState,useEffect } from 'react';
import DatePicker from 'react-native-datepicker';
import Nav from './Views/Nav';
import Search from './Search';

import {useNavigation} from '@react-navigation/native'
import { Icon } from 'react-native-elements';
  const Home=() =>{
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const[adults,setAdults] = useState("2");
  const[child,setChild] = useState("0");
  const[nights,setNights]=useState("1");
  const[Town,setTown]= useState("");
  // const [adultPlus, setAdultPlus] = useState(0);
  // const [childPlus, setChildPlus] = useState(0);
  // const [roomPlus, setRoomPlus] = useState(0);

 const SearchHotel =() =>{
    navigation.navigate("Available",{
      // date:startDate,
      // adults:adults,
      // child:child,
      // nights:nights,
      Town:Town
    })    
  }

  const Validation = () =>{
    var form_inputs = [startDate,adults,child,nights,Town];
// if(form_inputs.includes('') || form_inputs.includes(undefined)){
//  Alert.alert("Error","Please Fill In All The Information");
//   return ;
// }if(adults===0){
//   Alert.alert("Error","They Can't 0 Adults In The Room")
// return;
// }  
// if(nights=='0'){
//   Alert.alert("Error","Nights Cant be zero")
// return;
// } 
 
SearchHotel();
  }

  return (
    <View style={styles.container}>
<Nav text={'Home'}></Nav>
 <View style ={styles.ButtomView}>
 {/* <Text style={styles.Label}>Where are you going</Text> */}
<TextInput value={Town}
        style={styles.input}
        placeholder= "where are you going"
        keyboardType="default"
        onChangeText={(Town) => {setTown(Town)}}
      />
      {/* <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent: 'center'}}>
       <Text style={styles.Label}>Check In:</Text>
     
        </View> */}
{/*  */}
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "space-between",
              justifyContent: 'center'
            }}
          >
<Text>Adults</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 6,
                height: 40,
                padding: 10,
                width: 165,
                alignItems: "center",
                backgroundColor: "white",
                
                
              }}
              >
              
              <Pressable
                style={[
                  styles.btnadd,
                  { backgroundColor: "white", flexDirection: "row" },
                ]}
                onPress={() => setAdultPlus(Math.max(1, adultPlus + 1))}
              >
                {/* <Feather name="plus" size={22} color="black" /> */}
                {/* <Icon name='add' type='material'/>
              </Pressable>
              <Text style={{ fontsize: 21 }}> {adultPlus}</Text>

              <Pressable
                style={[
                  styles.btnadd,
                  { backgroundColor: "white", flexDirection: "row" },
                ]}
                onPress={() => setAdultPlus(Math.max(1, adultPlus - 1))}
              >
              <Icon name='remove' type='material'/>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <Text>Children</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 6,
                padding: 10,
                height: 40,
                width: 165,
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Pressable
                style={[
                  styles.btnadd,
                  { backgroundColor: "white", flexDirection: "row" },
                ]}
                onPress={() => setChildPlus(Math.max(1, childPlus + 1))}
              >
              
                <Icon name='add' type='material'/>
              </Pressable>
              <Text style={{ fontsize: 21 }}> {childPlus}</Text>

              <Pressable
                style={[
                  styles.btnadd,
                  { backgroundColor: "white", flexDirection: "row" },
                ]}
                onPress={() => setChildPlus(Math.max(1, childPlus - 1))}
              >
               <Icon name='remove' type='material'/>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <Text>Rooms</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 6,
                height: 40,
                padding: 10,
                width: 165,
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Pressable
                style={[
                  styles.btnadd,
                  { backgroundColor: "white", flexDirection: "row" },
                ]}
                onPress={() => setRoomPlus(Math.max(1, roomPlus + 1))}
              >
              
                <Icon name='add' type='material'/>
              </Pressable>
              <Text style={{ fontsize: 21 }}> {roomPlus}</Text>

              <Pressable
                style={[
                  styles.btnadd,
                  { backgroundColor: "white", flexDirection: "row" },
                ]}
                onPress={() => setRoomPlus(Math.max(1, roomPlus - 1))}
              >
              <Icon name='remove' type='material'/>
              </Pressable>
            </View>
          </View>
          <View style={{alignItems:'center'}}></View> */} 
      
      {/* <Text style={styles.Label}>How Many Nights Are You Planning On Staying </Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={2}
        value ={nights}
        onChangeText={(nights) => {setNights(nights)}}
      />
       <Text style={styles.Label}>Adults</Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value= {adults}
        onChangeText={(adults) => {setAdults(adults)}}
      />
       <Text style={styles.Label}>Children Age: 0 to 15</Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value= {child}
        onChangeText={(child) => {setChild(child)}}
      /> */}
<TouchableOpacity  style={styles.Button} onPress={Validation} >
     <Text style={styles.ButtonText}>Check hotels</Text>
  </TouchableOpacity>


 </View>
    </View>
  );
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    marginTop:40

  },
  Label:{
    color: '#000',
    fontSize: 15,
    margin:5,
    // width:'85%',
    fontWeight: "bold",
    // backgroundColor:'blue',
    
  },inputDate:{
    width:'40%',
    color:'#000',
    marginBottom:5,
    height:50,
    backgroundColor:'#fff',
    flexDirection: 'column',
    paddingBottom: 30,
    
    
    

  },
  input: {
    width:'85%',
    color:'#000',
    borderRadius:5,
    height:50,
    backgroundColor:'#fff',
    marginBottom:10,
    borderWidth: 1,
    padding: 10,
    marginTop: 40,
    textAlign: 'center'
  },

  ButtomView:{
    width:'100%',
    height:'92%',
    display:'flex',
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
alignItems:'center',
marginTop: 10
  },
  ButtonHome:{
     color:'#fff',
     fontWeight:'bold',
    fontSize:25,
    width:'90%',
    paddingLeft:10
  },
  ButtonText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:16  },

});
