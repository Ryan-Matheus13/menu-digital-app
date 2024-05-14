import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Quantity from "./Quantity";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import {
  handleIncrementProduct,
  handleDecrementProduct,
} from "../store/root/actions";

export default function ProductCartItem({ product }) {
  const dispatch = useAppDispatch();

  const getImage = (image) => {
    switch (image) {
      case "sushi1.jpeg":
        return require("../assets/images/products/sushi1.jpeg");
      case "sushi2.jpeg":
        return require("../assets/images/products/sushi2.jpeg");
      case "sushi3.jpeg":
        return require("../assets/images/products/sushi3.jpeg");
      case "sushi4.jpeg":
        return require("../assets/images/products/sushi4.jpeg");
      case "sushi5.jpeg":
        return require("../assets/images/products/sushi5.jpeg");
      case "sushi6.jpeg":
        return require("../assets/images/products/sushi6.jpeg");
      case "sushi7.jpeg":
        return require("../assets/images/products/sushi7.jpeg");
      case "sushi8.jpeg":
        return require("../assets/images/products/sushi8.jpeg");
      case "sushi9.jpeg":
        return require("../assets/images/products/sushi9.jpeg");
      case "sushi10.jpeg":
        return require("../assets/images/products/sushi10.jpeg");
    }
  };

  const handleIncrementProductQuant = () => {
    if (product.quantity <= 19) {
      const obj = {
        idProduct: product.id,
        quantity: product.quantity,
      };
      dispatch(handleIncrementProduct(obj));
    }
  };

  const handleDecrementProductQuant = () => {
    if (product.quantity >= 1) {
      const obj = {
        idProduct: product.id,
        quantity: product.quantity,
      };
      dispatch(handleDecrementProduct(obj));
    }
  };

  return (
    <View style={styles.productContainer}>
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={getImage(product.image)} />
      </View>
      <View style={styles.productContent}>
        <View style={styles.productLabel}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productAdictional}>
            Adicional: 1x {product.adictional.name} - R${" "}
            {product.adictional.price.toFixed(2)}
          </Text>
        </View>
        <Quantity
          value={product.quantity}
          increment={handleIncrementProductQuant}
          decrement={handleDecrementProductQuant}
          size={"small"}
        />
      </View>
      <View style={styles.productPriceTotalContainer}>
        <Text style={styles.productPriceTotal}>
          R$ {product.total.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 15,
    flexDirection: "row",
    gap: 10,
    padding: 15,
  },
  productImageContainer: {
    height: 70,
    width: 70,
  },
  productImage: {
    borderRadius: 10,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  productContent: {
    flex: 1,
    gap: 5,
  },
  productPriceTotalContainer: {
    justifyContent: "flex-end",
  },
  productPriceTotal: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "#555",
  },
  productLabel: {
    justifyContent: "center",
    flex: 1,
  },
  productName: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#555",
    height: 20,
  },
  productAdictional: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#555",
  },
});
