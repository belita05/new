import React, { useState } from "react";
//import { ListItem } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-datepicker";
import Feather from "react-native-vector-icons/Feather";
import Backbtn from "./Backbtn/Backbtn";

const BookInfo = ({route,navigation}) => {
//   const navigation = useNavigation();
  const [startDate, setstartDate] = useState("2022-03-09");
  const [endDate, setendDate] = useState("2022-03-09");
  const [type, setType] = useState("startDate");
  const [adultPlus, setAdultPlus] = useState(0);
  const [childPlus, setChildPlus] = useState(0);
  const [roomPlus, setRoomPlus] = useState(0);
  const id = route.params.key;

  const getInfo = () => {
    navigation.navigate("HotelView",
    {
      key:id,
      sDate:startDate,
      eDate :endDate,
      Aplus:adultPlus,
      cPlus:childPlus,
      rPlus:roomPlus    
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      
      <View style={style.imgContainer}>
        <Image
          style={style.img}
          resizeMode={"cover"}
          source={{
            uri: "https://images.unsplash.com/photo-1613618902610-95d88084ee11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
        />
      </View>
      <View style={{ padding: 20 }}>
        <View
          style={{
            marginTop: 0,
            backgroundColor: "rgba(0,0,0,.05)",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DatePicker
              style={{ width: 150 }}
              date={startDate}
              mode="date"
              // placeholder="check in"
              format="YYYY-MM-DD"
              // minDate="0"
              // maxDate="0"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  // marginLeft: 20,
                  // marginRight: 20,
                },
                dateInput: {
                  alignItems: "center",
                  justifyContent: "center",

                  // marginLeft: 40,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(startDate) => {
                setstartDate(startDate);
              }}
            />

            <DatePicker
              style={{ width: 150 }}
              date={endDate}
              mode="date"
              // placeholder="select date"
              format="YYYY-MM-DD"
              // minDate="2016-05-01"
              // maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  // marginLeft: 20,
                  // marginRight: 20,
                  // flexDirection: 'column'
                },
                dateInput: {
                  // marginLeft: 40,
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
              onDateChange={(endDate) => {
                setendDate(endDate);
              }}
            />
          </View>

          <View style={{ marginTop: 50 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                justifyContent: "space-evenly",
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
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setAdultPlus(Math.max(1, adultPlus + 1))}
                >
                  <Feather name="plus" size={22} color="black" />
                </Pressable>
                <Text style={{ fontsize: 21 }}> {adultPlus}</Text>

                <Pressable
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setAdultPlus(Math.max(1, adultPlus - 1))}
                >
                  <Feather name="minus" size={22} color="black" />
                </Pressable>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                justifyContent: "space-evenly",
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
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setChildPlus(Math.max(1, childPlus + 1))}
                >
                  <Feather name="plus" size={22} color="black" />
                </Pressable>
                <Text style={{ fontsize: 21 }}> {childPlus}</Text>

                <Pressable
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setChildPlus(Math.max(1, childPlus - 1))}
                >
                  <Feather name="minus" size={22} color="black" />
                </Pressable>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                justifyContent: "space-evenly",
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
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setRoomPlus(Math.max(1, roomPlus + 1))}
                >
                  <Feather name="plus" size={22} color="black" />
                </Pressable>
                <Text style={{ fontsize: 21 }}> {roomPlus}</Text>

                <Pressable
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setRoomPlus(Math.max(1, roomPlus - 1))}
                >
                  <Feather name="minus" size={22} color="black" />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
  
      <View
        style={{
          position: "absolute",
          bottom: 15,
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={ getInfo}
          style={style.Button}
        >
          <Text style={style.ButtonText}>Check Availability</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  ButtomView: {
    width: "100%",
    height: "60%",
    display: "flex",
    // justifyContent: "flex-end",
    alignItems: "center",
  },

  Button: {
    width: "100%",
    color: "#000",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#E3AC1E",
    justifyContent: "center",
    alignItems: "center",
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
});
export default BookInfo;
