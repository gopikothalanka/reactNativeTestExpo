import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const StyledButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Add members</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8b1c42", // Dark red color similar to the one in the image
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded corners
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, // Adds a subtle shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#ffffff", // White text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
