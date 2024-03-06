import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from "react-native";

function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.backArrow}>
        <Text>{"<"}</Text>
      </Pressable>
      <Text style={styles.header}>Create an account</Text>
      <Text style={styles.subHeader}>Invest and double your income now</Text>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Create account</Text>
      </Pressable>
      <Text style={styles.signInText}>Already have an account?</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  backArrow: {
    alignSelf: "flex-start",
    marginTop: 50,
    marginBottom: 10,
  },
  header: {
    color: "black",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center",
  },
  subHeader: {
    color: "#4F4F4F",
    fontSize: 17,
    marginBottom: 80,
    alignSelf: "center",
  },
  input: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
    width: "95%",
    fontSize: 17,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#31A062",
    borderRadius: 20,
    padding: 18,
    alignSelf: "center",
    marginBottom: 30,
    width: "95%",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    alignSelf: "center",
  },
  signInText: {
    color: "#31A062",
    fontSize: 17,
    textAlign: "center",
  },
});

export default CreateAccount;
