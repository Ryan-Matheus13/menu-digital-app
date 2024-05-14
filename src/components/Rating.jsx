import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RatingStars from "../components/RatingStars";

export default function Rating({ rating }) {
  return (
    <View style={styles.ratingContainer}>
      <RatingStars rating={rating} />
      <View style={styles.ratingLabelContainer}>
        <Text style={styles.ratingLabel}>{rating}</Text>
        <Text style={styles.ratingSublabel}>
          ({rating >= 30 ? "30+" : rating})
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
