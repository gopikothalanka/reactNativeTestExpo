import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
export const ContactItem = ({ contact }) => {
  const getInitials = (name) => {
    const words = name.trim().split(" ");

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    } else {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{getInitials(contact.name)}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>
          <Feather
            name="phone-call"
            size={14}
            color="black"
            style={{ marginRight: 5 }}
          />
          {contact.phone}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => console.log("Delete contact")}
        style={styles.deleteButton}
      >
        <FontAwesome name="trash" size={20} color="#8b1c42" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 1, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0d3d9", // Light pink color for the avatar background
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#8b1c42", // Darker red text color
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  phone: {
    fontSize: 14,
    color: "#666",
  },
  deleteButton: {
    padding: 8,
  },
});
