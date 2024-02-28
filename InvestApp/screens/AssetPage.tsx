import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import CloseButton from "../assets/AssetPage/CloseButton.svg";

type HistoryItem = {
  transactionType: string;
  stockSymbol: string;
  date: string;
  amount: string;
};

const AssetPage = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const historyData: HistoryItem[] = [
    {
      transactionType: "Buy",
      stockSymbol: "APPL",
      date: "TUE 22 Jun 2020",
      amount: "Rp 200.000",
    },
    {
      transactionType: "Sell",
      stockSymbol: "TLKM",
      date: "TUE 22 Jun 2020",
      amount: "Rp 150.000",
    },
    {
      transactionType: "Buy",
      stockSymbol: "FB",
      date: "TUE 22 Jun 2020",
      amount: "Rp 1,000.240",
    },
    {
      transactionType: "Sell",
      stockSymbol: "APPL",
      date: "TUE 22 Jun 2020",
      amount: "Rp 1,000.240",
    },
  ];

  const renderHistoryItem = (item: HistoryItem) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyAmount}>{item.amount}</Text>
      <View style={styles.historyDetail}>
        <Text style={styles.historyTransactionType}>
          {item.transactionType} "{item.stockSymbol}" Stock
        </Text>
        <Text style={styles.historyDate}>{item.date}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modalBackdrop}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>My Asset</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <CloseButton
                  style={styles.closeButton}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.totalAssetText}>
              Your total asset portfolio
            </Text>
            <Text style={styles.assetValue}>N203,935</Text>
            <Text style={styles.assetPercentage}>+2%</Text>

            <View style={styles.currentPlansContainer}>
              <Text style={styles.currentPlansTitle}>Current Plans</Text>
              <Image
                source={require("../assets/AssetPage/Coin.png")}
                style={styles.planImage}
              />
              <Text style={styles.planName}>Gold</Text>
              <Text style={styles.planReturn}>30% return</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.seeAllPlansText}>See All Plans</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.historySection}>
              <Text style={styles.sectionTitle}>History</Text>
              <ScrollView>
                {historyData.map((item, index) => (
                  <React.Fragment key={index}>
                    {renderHistoryItem(item)}
                  </React.Fragment>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "#EAECF5",
  },
  modalView: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  totalAssetText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  assetValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  assetPercentage: {
    fontSize: 18,
    color: "green",
    marginBottom: 12,
  },
  currentPlansContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  currentPlansTitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  planImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
  },
  planName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  planReturn: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  seeAllPlansText: {
    fontSize: 16,
    color: "#1E90FF",
    marginBottom: 16,
  },
  historySection: {
    width: "100%",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
  },
  historyAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  historyDetail: {
    alignItems: "flex-end",
  },
  historyTransactionType: {
    fontSize: 14,
    color: "#333",
  },
  historyDate: {
    fontSize: 12,
    color: "#666",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 24,
    height: 24,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AssetPage;
