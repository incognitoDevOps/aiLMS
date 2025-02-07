import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "./../../constant/Colors";

const signup = () => {
  return (
    <View
      style={{
        display:"flex",
        flex:1,
        alignItems: "center",
        paddingTop: 90,
        backgroundColor:Colors.WHITE,
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{
          width: 180,
          height: 180,
        }}
      />
      <Text style={{
        fontSize:30,
        fontFamily:"outfit-bold"
      }}>Create New Account</Text>
      <TextInput placeholder="Full Name" style={styles.textInput}/>
      <TextInput placeholder="Email" style={styles.textInput}/>
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput}/>
      <TouchableOpacity 
      style = {{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        width: "90%",
        marginTop:25,
        borderRadius: 10
      }}>
        <Text style={{
            fontFamily: "outfit",
            fontSize:20,
            color:Colors.WHITE,
            textAlign:"center"
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        width:"90%",
        padding:15,
        fontSize:18,
        marginTop:20,
        borderRadius:80
    }
});
