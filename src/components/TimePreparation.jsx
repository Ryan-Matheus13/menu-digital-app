import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function TimePreparation({ time }) {
  return (
    <View style={styles.productTimeContainer}>
      <View style={styles.productTime}>
        <AntDesign name="clockcircleo" size={16} color="#999" />
        <Text style={styles.productTimeLabel}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productTimeContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },

  productTime: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    flexDirection: "row",
    gap: 5,
  },
  productTimeLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#999",
  },
});
