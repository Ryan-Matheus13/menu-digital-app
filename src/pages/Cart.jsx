import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import Constants from "expo-constants";
import { handleSetCategorys, handleSetProducts } from "../store/root/actions";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import ProductCartItem from "../components/ProductCartItem";
import { StatusBar } from "expo-status-bar";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

export default function Cart({ navigation }) {
  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

  const totalOrder = () => {
    let total = 0;
    rootStore.cart.map((product) => {
      total += product.total * product.quantity;
    });

    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 90 }}
      >
        <Header navigation={navigation} mode={"cart"} />
        <View style={styles.productsContainer}>
          {rootStore.cart.map((product, index) => {
            return <ProductCartItem key={index} product={product} />;
          })}
        </View>
      </ScrollView>
      <View style={styles.cartFooter}>
        <View style={styles.orderInfoContainer}>
          <Text style={styles.orderInfoLabel}>Seu pedido:</Text>
          <Text style={styles.orderInfoPrice}>R$ {totalOrder()}</Text>
        </View>
        <TouchableOpacity style={styles.orderFinish}>
          <Text style={styles.orderFinishText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  content: {
    width: "100%",
    marginTop: Constants.statusBarHeight + 10,
    marginBottom: navbarHeight + 70,
  },
  productsContainer: {
    gap: 10,
  },
  cartFooter: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
  },
  orderInfoContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  orderInfoLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#555",
  },
  orderInfoPrice: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: "#555",
  },
  orderFinish: {
    backgroundColor: "#FE724C",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  orderFinishText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#fff",
  },
});
