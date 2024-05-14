import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { handleResetCart } from "../store/root/actions";

export default function Header({ mode, navigation }) {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(handleResetCart());
  };
  return (
    <>
      {mode == "cart" && (
        <View style={styles.headerContainer}>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.5}
              style={styles.headerIcon}
            >
              <Feather name="arrow-left-circle" size={34} color="#FE724C" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={handleClearCart}
              activeOpacity={0.5}
              style={styles.headerIcon}
            >
              <MaterialIcons name="delete-sweep" size={34} color="#FE724C" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {mode == "add-product" && (
        <View style={styles.headerContainer}>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.5}
              style={styles.headerIcon}
            >
              <Feather name="arrow-left-circle" size={34} color="#FE724C" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity activeOpacity={0.5} style={styles.headerIcon}>
              <FontAwesome name="shopping-cart" size={34} color="#FE724C" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {mode == "home" && (
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Menu</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              activeOpacity={0.5}
              style={styles.headerIcon}
            >
              <FontAwesome name="shopping-cart" size={34} color="#FE724C" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 34,
    color: "#FE724C",
    height: 45,
  },
  headerIcons: {
    height: 40,
    gap: 20,
    flexDirection: "row",
  },
  headerIcon: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
