import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Colors from "./../../constant/Colors";
import { useRouter } from "expo-router";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { setDoc, doc } from "firebase/firestore";
import {auth, db} from "../../config/firebaseConfig"

const signup = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState();
  const [email, setFullEmail] = useState();
  const [password, setFullPassword] = useState();

  const CreateNewAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(resp) => {
        // Handle the response (e.g., user creation success)
        const user = resp.user;
        console.log(user);
        //Save User to Database
        await SaveUser(user);

      })
      .catch(error => {
        // Handle any errors (e.g., invalid email, weak password)
        const err = error.message;
        console.error(err);
      });
  };

  const SaveUser = async()=>{
    await setDoc(doc(db, "users", email),{
      name:fullName,
      email:email,
      member:false,
      uid:user?.uid
    })
  }
  
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        paddingTop: 90,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{
          width: 180,
          height: 180,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
        }}
      >
        Create New Account
      </Text>
      <TextInput
        placeholder="Full Name"
        onChange={(value) => setFullName(value)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Email"
        onChange={(value) => setFullEmail(value)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        onChange={(value) => setFullPassword(value)}
        secureTextEntry={true}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          width: "90%",
          marginTop: 25,
          borderRadius: 10,
        }}
        onPress={()=>CreateNewAccount()}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 20,
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Already have an account ?
        </Text>
        <Pressable onPress={() => router.push("./signIn")}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontFamily: "outfit-bold",
            }}
          >
            Sign In Here
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: "90%",
    padding: 15,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 80,
  },
});
