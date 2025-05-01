import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import styles from "../styles/loginStyles";

const userList = [
  { name: "Egi Abdul azis saputra", userID: "jisung", password: "pass123" },
  { name: "Guntur", userID: "guntur", password: "pass456" },
  { name: "Alex", userID: "alex", password: "pass789" },
  { name: "Hery maguire", userID: "maguire", password: "pass987" },
];

const LoginScreen = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const matchedUser = userList.find(
      (user) => user.userID === userID && user.password === password
    );

    if (matchedUser) {
      Alert.alert("Login Successful", `Welcome, ${matchedUser.name}!`);
    } else {
      Alert.alert("Login Failed", "Invalid UserID or Password.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image
          source={require("../assets/default-avatar.png")}
          style={styles.image}
        />

        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>UserID:</Text>
          <TextInput
            style={styles.input}
            value={userID}
            onChangeText={setUserID}
            placeholder="Enter your UserID"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
