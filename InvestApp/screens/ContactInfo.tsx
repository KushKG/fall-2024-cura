import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

const ContactInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact info</Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/ContactInfo/ProfilePic.png")}
          style={styles.profileImage}
        />
        <TouchableOpacity onPress={() => {}} style={styles.editIconContainer}>
          <Image
            source={require("../assets/ContactInfo/edit.png")}
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        {renderInfoItem("Name", "Warren Buffet")}
        {renderInfoItem("Birthdate", "05 November 1993")}
        {renderInfoItem("Gender", "Male")}
        {renderInfoItem("Email", "warren.buff@invest.ai")}
        {renderInfoItem("Phone Number", "-")}
        {renderInfoItem("Address", "-")}
      </View>
    </SafeAreaView>
  );
};

const renderInfoItem = (label: string, value: string) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} value={value} editable={true} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  profileImageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editIconContainer: {
    position: "absolute",
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  infoItem: {
    marginBottom: 20, // Adjust as needed
  },
  infoLabel: {
    fontSize: 12,
    color: "#000",
    marginBottom: 4, // Space between label and input
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
    marginTop: 4,
  },
  input: {
    fontSize: 16,
    color: "#707070",
    paddingVertical: 8,
    paddingHorizontal: 0, // No side padding to align text to full width of container
  },
});

export default ContactInfo;
