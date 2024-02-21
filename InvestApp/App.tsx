import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AssetPage from "./screens/AssetPage";

export default function App() {
  return <AssetPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
