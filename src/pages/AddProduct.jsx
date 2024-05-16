import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import Header from "../components/Header";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import Quantity from "../components/Quantity";
import TimePreparation from "../components/TimePreparation";
import { StatusBar } from "expo-status-bar";
import Rating from "../components/Rating";
import AdictionalItem from "../components/AdictionalItem";
import { handleAddProduct } from "../store/root/actions";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

export default function AddProduct({ route, navigation }) {
  const [quant, setQuant] = useState(1);

  const { id } = route.params;

  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

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
    if (quant <= 19) {
      setQuant(quant + 1);
    }
  };

  const handleDecrementProductQuant = () => {
    if (quant >= 2) {
      setQuant(quant - 1);
    }
  };

  const handleAddProductToCart = () => {
    let adict;
    rootStore.products[id].adictionals.map((adictional, index) => {
      if (adictional.active) {
        adict = {
          id: index,
          name: adictional.name,
          price: adictional.price,
        };
        return;
      }
    });
    const obj = {
      id,
      name: rootStore.products[id].name,
      image: rootStore.products[id].image,
      quantity: quant,
      adictional: adict,
      price: rootStore.products[id].price,
      total: rootStore.products[id].price + adict.price,
    };

    dispatch(handleAddProduct(obj));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 90 }}
      >
        <Header navigation={navigation} mode={"add-product"} />
        <Image
          style={styles.productImage}
          source={getImage(rootStore.products[id].image)}
        />
        <View style={styles.productInfo}>
          <View style={styles.productContentContainer}>
            <View
              style={[
                styles.productContent,
                { alignItems: "flex-start", flex: 2 },
              ]}
            >
              <Text style={styles.productName}>
                {rootStore.products[id].name}
              </Text>
              <Rating rating={rootStore.products[id].quantityRating} />
              <Text style={styles.productPrice}>
                R$ {rootStore.products[id].price}
              </Text>
            </View>
            <View
              style={[
                styles.productContent,
                {
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                },
              ]}
            >
              <TimePreparation time={rootStore.products[id].time} />
              <Quantity
                value={quant}
                increment={handleIncrementProductQuant}
                decrement={handleDecrementProductQuant}
                size={"default"}
              />
            </View>
          </View>
          <Text style={styles.productDescription}>
            {rootStore.products[id].description}
          </Text>
        </View>
        <View style={styles.divisor} />
        <View style={styles.adictionalsContainer}>
          {rootStore.products[id].adictionals.map((adictional) => {
            return (
              <AdictionalItem
                key={adictional.id}
                productIndex={id}
                adictional={adictional}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={handleAddProductToCart}
        style={styles.addCartButton}
      >
        <Text style={styles.addCartButtonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
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
  addCartButton: {
    backgroundColor: "#FE724C",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
  },
  addCartButtonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: "#fff",
  },
  content: {
    width: "100%",
    marginTop: Constants.statusBarHeight + 10,
    marginBottom: navbarHeight + 70,
  },
  productInfo: {
    gap: 10,
  },
  productContentContainer: {
    flexDirection: "row",
    gap: 5,
  },
  productContent: {
    flex: 1,
  },
  productName: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#555",
  },
  productPrice: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
    color: "#555",
  },
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 15,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 15,
  },
  ratingLabelContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex.start",
  },
  ratingLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#555",
  },
  ratingSublabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#555",
    paddingTop: 2,
  },
  productDescription: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#555",
  },
  divisor: {
    width: "100%",
    height: 1,
    backgroundColor: "#dcdcdc",
  },
  adictionalsContainer: {
    gap: 10,
  },
});
