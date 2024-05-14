import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryItem({ category, isActive }) {
  const getImage = (image) => {
    switch (image) {
      case "all.png":
        return require("../assets/images/categorys/all.png");
      case "tradictionals.png":
        return require("../assets/images/categorys/tradictionals.png");
      case "hots.png":
        return require("../assets/images/categorys/hots.png");
      case "temakis.png":
        return require("../assets/images/categorys/temakis.png");
      case "drinks.png":
        return require("../assets/images/categorys/drinks.png");
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={
        isActive ? styles.categoryContainerActive : styles.categoryContainer
      }
    >
      <View style={styles.categoryImageContainer}>
        <Image style={styles.categoryImage} source={getImage(category.image)} />
      </View>
      <Text
        style={isActive ? styles.categoryTitleActive : styles.categoryTitle}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    height: "100%",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
  },
  categoryTitle: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#555",
  },
  categoryContainerActive: {
    height: "100%",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#FE724C",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
  },
  categoryTitleActive: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#fff",
  },
  categoryImageContainer: {
    borderRadius: 100,
    overflow: "hidden",
    height: 80,
    width: 80,
  },
  categoryImage: {
    height: "100%",
    width: "100%",
  },
});
