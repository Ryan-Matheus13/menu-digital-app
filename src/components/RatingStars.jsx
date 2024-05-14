import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RatingStars({ rating }) {
  return (
    <View style={styles.ratingContainer}>
      <MaterialCommunityIcons
        name="star"
        size={22}
        color={rating >= 1 ? "#F6D666" : "#dcdcdc"}
      />
      <MaterialCommunityIcons
        name="star"
        size={22}
        color={rating >= 2 ? "#F6D666" : "#dcdcdc"}
      />
      <MaterialCommunityIcons
        name="star"
        size={22}
        color={rating >= 3 ? "#F6D666" : "#dcdcdc"}
      />
      <MaterialCommunityIcons
        name="star"
        size={22}
        color={rating >= 4 ? "#F6D666" : "#dcdcdc"}
      />
      <MaterialCommunityIcons
        name="star"
        size={22}
        color={rating >= 5 ? "#F6D666" : "#dcdcdc"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    gap: 5,
  },
});
