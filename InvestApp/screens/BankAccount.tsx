import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const BankAccountInfoScreen = () => {
  const accounts = [
    {
      bankName: "Bank of America - 0182128xxx",
      accountHolder: "Jonas Macroni",
    },
    { bankName: "Zenith Bank - 0182128xxx", accountHolder: "Jonas Macroni" },
  ];

  const AccountBox = ({ bankName, accountHolder }) => (
    <View style={styles.accountBox}>
      <Text style={styles.bankName}>{bankName}</Text>
      <Text style={styles.accountHolder}>{accountHolder}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backArrow}>&lt;</Text>
        <Text>Bank account info</Text>
      </View>
      {accounts.map((account, index) => (
        <AccountBox
          key={index}
          bankName={account.bankName}
          accountHolder={account.accountHolder}
        />
      ))}
      <TouchableOpacity style={styles.addButton} onPress={() => console.log('Add account')}>
        <Text style={styles.buttonText}>Add account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    alignSelf: 'stretch',
    alignItems: 'center',
    fontWeight: "bold",
    marginTop: 70,
    marginBottom: 50,
    fontSize: 17,
  },
  backArrow: {
    position: "absolute",
    left: 10,
    fontSize: 24,
  },
  accountBox: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 10,
    padding: 30,
    marginVertical: 15,
    width: '95%',
    alignSelf: 'center',
  },
  bankName: {
    color: "#555555",
    fontSize: 16,
    fontWeight: "bold",
  },
  accountHolder: {
    color: "grey",
    fontSize: 14,
  },
  addButton: {
    backgroundColor: "#31A062",
    borderRadius: 20,
    padding: 18,
    marginTop: 340,
    width: "95%",
    alignSelf: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    textAlign: 'center', 
    fontWeight: "bold",
  },
});

export default BankAccountInfoScreen;
