import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { handleOpenProduct } from "../store/root/actions";
import TimePreparation from "./TimePreparation";

export default function ProductCard({ product, id, navigation }) {
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

  const handleOpenProduct = () => {
    navigation.navigate("AddProduct", { id });
  };

  return (
    <TouchableOpacity
      onPress={handleOpenProduct}
      style={styles.productContainer}
      activeOpacity={0.95}
    >
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.productRating}>
        <Text style={styles.productRatingLabel}>{product.rating}</Text>
        <MaterialCommunityIcons name="star" size={18} color="#F6D666" />
        <Text style={styles.productRatingQuantityLabel}>
          {product.quantityRating >= 30 ? "30+" : product.quantityRating}
        </Text>
      </View>
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={getImage(product.image)} />
      </View>
      <View style={styles.productContent}>
        <View style={styles.productLabel}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
        </View>
        <TimePreparation time={product.time} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 15,
    position: "relative",
    overflow: "hidden",
  },
  productPriceContainer: {
    zIndex: 5,
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "#555",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  productPrice: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#555",
  },
  productRating: {
    zIndex: 5,
    top: 150,
    left: 20,
    position: "absolute",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    maxHeight: 40,
    flexDirection: "row",
    gap: 5,
  },
  productRatingLabel: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "#555",
  },
  productRatingQuantityLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#555",
  },
  productImageContainer: {
    flex: 1,
  },
  productImage: {
    height: 170,
    width: "100%",
  },
  productContent: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  productLabel: {
    flex: 3,
  },
  productTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#555",
  },
  productDescription: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#555",
  },
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
