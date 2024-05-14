import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function SearchInput({ onChange, value, placeholder, type }) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchIconContainer}>
        <Octicons name="search" size={30} color="#999" />
      </View>
      <TextInput
        style={styles.search}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={type}
        placeholderTextColor="#999"
      />
      <TouchableOpacity activeOpacity={0.5} style={styles.searchIconContainer}>
        <Ionicons name="filter" size={30} color="#999" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 140,
  },
  search: {
    flex: 1,
    height: 50,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#555",
  },
  searchIconContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
