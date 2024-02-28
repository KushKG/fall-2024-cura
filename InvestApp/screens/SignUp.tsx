import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import AssetLogo from "../assets/SignUp/AssetLogo.svg";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <AssetLogo style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>
          Stay on top of your finance with us.
        </Text>
        <Text style={styles.subText}>
          We are your new financial Advisors to recommend the best investments
          for you.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 300,
    height: 273.23,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#000000",
    width: 354,
    height: 82,
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
    flexWrap: "wrap",
  },
  subText: {
    width: 354,
    height: 66,
    fontSize: 17,
    paddingVertical: 10,
    fontWeight: "600",
    lineHeight: 22,
    textAlign: "center",
    color: "#4F4F4F",
  },
  buttonContainer: {
    marginBottom: 30,
  },
  createAccountButton: {
    backgroundColor: "#31A062",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginVertical: 10,
    alignItems: "center",
  },
  createAccountButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#31A062",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUp;
