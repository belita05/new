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
import Lodge from "./../../assets/lodge3.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";
import firebase from "firebase";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
const Home = (props) => {
  const [hotels, setHotels] = useState([]);
  const navigation = useNavigation();
  const Town = props.Town;
  useEffect(() => {
    firebase
      .firestore()
      .collection("Hotel")
      .where("location", "==", Town)
      .get()
      .then((results) => results.docs)
      .then((docs) =>
        docs.map((doc) => ({
          id: doc.id,
          details: doc.data().details,
          hotelName: doc.data().hotelName,
          location: doc.data().location,
          price: doc.data().price,
          url: doc.data().url,
        }))
      )
      .then((hotels) => setHotels(hotels));
  }, []);

  return (
    <View style={{ padding: 10 }}>
      {hotels?.map((hotel) => (
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image style={styles.logo} source={{ uri: hotel.url }}></Image>
          </View>
          <View style={styles.namesandprice}>
            <Text style={styles.Hotelname}>{hotel.hotelName}</Text>
            <Text style={styles.Info}> R {hotel.price}</Text>
          </View>
          <View style={styles.HotelLocationView}>
            <Ionicons name="location" color={"grey"} size={20}></Ionicons>
            <Text style={styles.HotelLocation}>
              {hotel.location.toUpperCase()}
            </Text>
          </View>
          <View style={styles.HotelLocationView}>
            <View style={styles.btnContainer}>
              <View style={styles.rowspace}>
                <Ionicons name="star" color={"grey"} size={15}></Ionicons>
                <Text style={styles.Info}>5.0</Text>
              </View>
              
              <TouchableOpacity
                style={styles.Button}
                onPress={() =>
                  navigation.navigate("HotelView", { key: hotel.id ,hotelName: hotel.hotelName})
                }
              >
                <Text style={styles.ButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.InfoView}></View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  logo: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    resizeMode: "cover",
  },
  Hotelname: {
    // marginTop: 5,
    color: "black",
    // marginLeft: 5,
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
    fontSize: 16,
  },
  Info: {
    fontSize: 15,
  },
  InfoView: {
    width: "32%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  Button: {
    width:100,
    color: "#000",
    height: 35,
    backgroundColor: "green",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  imgContainer: {
    backgroundColor: "red",
    width: "100%",
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
  },
  namesandprice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  btnContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width:'100%'
  },
  rowspace:{
    flexDirection: "row",
    alignItems: "center",
  }
});
