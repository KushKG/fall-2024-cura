import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import AssetPage from "./screens/AssetPage";
import SignUp from "./screens/SignUp";
import ContactInfo from "./screens/ContactInfo";

export default function App() {
  return <ContactInfo />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
