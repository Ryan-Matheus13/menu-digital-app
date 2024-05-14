import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { handleSelectAdictional } from "../store/root/actions";

export default function AdictionalItem({ adictional, productIndex }) {
  const dispatch = useAppDispatch();

  const getImage = (image) => {
    switch (image) {
      case "adictional1.png":
        return require("../assets/images/adictionals/adictional1.png");
      case "adictional2.png":
        return require("../assets/images/adictionals/adictional2.png");
      case "adictional3.png":
        return require("../assets/images/adictionals/adictional3.png");
    }
  };

  const handleAdictionalClick = () => {
    const obj = {
      productIndex,
      adictionalIndex: adictional.id,
    };
    dispatch(handleSelectAdictional(obj));
  };
  return (
    <>
      {adictional.active && (
        <TouchableOpacity
          onPress={handleAdictionalClick}
          activeOpacity={0.8}
          style={styles.adictional}
        >
          <View style={styles.adictionalImageContainer}>
            <Image
              style={styles.adictionalImage}
              source={getImage(adictional.image)}
            />
          </View>
          <View style={styles.adictionalTextContainer}>
            <Text style={styles.adictionalName}>{adictional.name}</Text>
            <Text style={styles.adictionalPrice}>
              R$ {adictional.price.toFixed(2)}
            </Text>
          </View>
          <View style={styles.adictionalRadioButtonActive}>
            <View style={styles.adictionalRadioButtonInnerActive} />
          </View>
        </TouchableOpacity>
      )}
      {!adictional.active && (
        <TouchableOpacity
          onPress={handleAdictionalClick}
          activeOpacity={0.8}
          style={styles.adictional}
        >
          <View style={styles.adictionalImageContainer}>
            <Image
              style={styles.adictionalImage}
              source={getImage(adictional.image)}
            />
          </View>
          <View style={styles.adictionalTextContainer}>
            <Text style={styles.adictionalName}>{adictional.name}</Text>
            <Text style={styles.adictionalPrice}>
              R$ {adictional.price.toFixed(2)}
            </Text>
          </View>
          <View style={styles.adictionalRadioButton}>
            <View style={styles.adictionalRadioButtonInner} />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  adictional: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 25,
  },
  adictionalImageContainer: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    backgroundColor: "#ccc",
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: "hidden",
  },
  adictionalImage: {
    width: "100%",
    height: "100%",
  },
  adictionalTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  adictionalName: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  adictionalPrice: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#999",
    marginTop: 5,
  },
  adictionalRadioButton: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    width: 25,
    height: 25,
    padding: 5,
    borderRadius: 100,
  },
  adictionalRadioButtonInner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#dcdcdc",
    borderRadius: 100,
  },
  adictionalRadioButtonActive: {
    borderWidth: 1,
    borderColor: "#FE724C",
    width: 25,
    height: 25,
    padding: 5,
    borderRadius: 100,
  },
  adictionalRadioButtonInnerActive: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FE724C",
    borderRadius: 100,
  },
});
