import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function Categorys({ categorys }) {
  return (
    <ScrollView
      horizontal={true}
      style={styles.categorys}
      contentContainerStyle={{ gap: 20 }}
    >
      {categorys.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            category={category}
            isActive={category.active}
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
    height: 170,
  },
});
