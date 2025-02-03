import { Image, Text, View, StyleSheet } from "react-native";
import Colors from "./../constant/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../assets/images/landing.png")}
        style={{
          width: "100%",
          height: 300,
          marginTop: 70,
        }}
      />

      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: Colors.WHITE,
          }}
        >
          Learn Everything & Anything
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginTop:20,
            textAlign: "center",
            color: Colors.WHITE,
          }}
        >
          Transform your ideas into engaging educational content, effortlessly with AI! 📚🤖
        </Text>

        <View style={styles.button}>
          <Text style={[styles.buttonText, {color:Colors.PRIMARY}]}>Get Started</Text>
        </View>

        <View style={[styles.button, {backgroundColor:Colors.PRIMARY, borderWidth:1, borderColor:Colors.WHITE}]}>
          <Text style={[styles.buttonText, {color:Colors.WHITE}]}>Already Have an Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderRadius:10,
    marginTop:20
  },
  buttonText:{
    textAlign:"center",
    fontSize: 18
  }
})