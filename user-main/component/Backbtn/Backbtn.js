import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'


const Backbtn = () => {
  return (
    <View style={styles.btn}>
        <TouchableOpacity style={styles.icon}>

        <Icon name='keyboard-backspace' type='material' size={28} />
        </TouchableOpacity>
        <Text style={styles.text}>Check Room</Text>
    </View>
  )
}

export default Backbtn

const styles = StyleSheet.create({
    btn:{
        position:'absolute',
        top:30,
        left:20,
        width:50,
        height:50,
      
        flexDirection:'row',
        alignItems: "center",
    },
    icon:{
        padding:10
    },
    text:{
        fontSize:20,
        fontWeight:'900',
        flex:1
    }
})