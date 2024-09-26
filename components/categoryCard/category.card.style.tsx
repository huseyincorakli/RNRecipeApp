import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
       flex: 1,
       borderWidth:1,
       borderColor:'#e1e1e1',
       backgroundColor:'#ffff',
       padding:10,
       borderTopLeftRadius:100,
       borderBottomLeftRadius:100,
       borderTopRightRadius:10,
       borderBottomRightRadius:10,
       margin:8,
       flexDirection:'row',
       alignContent:'center',
     },
     image:{
        width:100,
        height:60,
        margin:5,
        resizeMode:'contain'
     },
     text:{
        alignSelf:'center',
        fontSize:22
     }
   });
   