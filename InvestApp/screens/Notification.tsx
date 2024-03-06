import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Notification = () => {
  const notifications = [
    {
      message: "Apple stocks just increased. Check it out now.",
      time: "15min ago",
    },
    {
      message: "Check out today's best investor. You'll learn from him.",
      time: "3min ago",
    },
    {
      message: "Where do you see yourself in the next ages.",
      time: "30secs ago",
    },
  ];

  const NotificationItem = ({ message, time }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.backArrow}>&lt;</Text>
      <Text style={styles.header}>Notifications</Text>
      {notifications.map((notification, index) => (
        <NotificationItem
          key={index}
          message={notification.message}
          time={notification.time}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  backArrow: {
    fontSize: 24,
    position: "absolute",
    top: 50,
    left: 10,
  },
  header: {
    color: "black",
    fontSize: 34,
    marginTop: 90,
    marginLeft: 13,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 90,
  },
  message: {
    color: "black",
    fontSize: 17,
    flex: 1,
  },
  time: {
    color: "grey",
    fontSize: 13,
    marginBottom: 60,
  },
});

export default Notification;
