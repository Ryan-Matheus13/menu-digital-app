import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

export default function Products({ products, filter, navigation }) {
  return (
    <ScrollView style={styles.products} contentContainerStyle={{ gap: 20 }}>
      {filter().map((product) => {
        return (
          <ProductCard
            key={product.id}
            navigation={navigation}
            id={product.id}
            product={product}
          />
        );
      })}
      {filter().length < 1 && (
        <Text style={styles.empty}>Nenhum item encontrado!</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categorys: {
    width: "100%",
    paddingVertical: 15,
  },
  empty: {
    width: "100%",
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#555",
  },
});
