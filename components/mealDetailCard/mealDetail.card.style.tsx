import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
       flex: 1,
     },
     body:{
        flex:1,
     },
     image:{
        width:'auto',
        height:300,
        resizeMode:'cover'
     },
     title:{
        color:'#A42A2A',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'left'
     },
     area:{
        fontSize:18,
        color:'#A42A2A',
        marginLeft:5,
        fontWeight:'bold',
     },
     border:{
        borderWidth:1,
        borderColor:'#BDBDBD'
     },
     instructions:{
        padding:8
     }
   });