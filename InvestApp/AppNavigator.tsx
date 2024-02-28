import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AssetPage from "./screens/AssetPage";
import ContactInfo from "./screens/ContactInfo";
import SignUp from "./screens/SignUp";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Button
      title="Go to SignUp"
      onPress={() => navigation.navigate("SignUp")}
    />
    <Button
      title="Go to ContactInfo"
      onPress={() => navigation.navigate("ContactInfo")}
    />
    <Button
      title="Go to AssetPage"
      onPress={() => navigation.navigate("AssetPage")}
    />
  </View>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
        {<Stack.Screen name="AssetPage" component={AssetPage} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
