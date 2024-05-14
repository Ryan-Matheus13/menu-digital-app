import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

export default function Products({ products, navigation }) {
  return (
    <ScrollView style={styles.products} contentContainerStyle={{ gap: 20 }}>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            navigation={navigation}
            id={product.id}
            product={product}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categorys: {
    width: "100%",
    paddingVertical: 15,
  },
});
