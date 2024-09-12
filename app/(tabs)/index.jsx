import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { contacts } from "./Contacts";
import { StyledButton } from "../../components/StyledButton";
import { ContactItem } from "../../components/ContactItem";
import AntDesign from "@expo/vector-icons/AntDesign";
const Index = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const [visibleContacts, setVisibleContacts] = useState(5); // Number of contacts to show initially

  const clickHandler = (data) => {
    // Add your logic for handling click on contact
  };

  const loadMore = () => {
    if (visibleContacts < contacts.length) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleContacts((prev) => prev + 5);
        setIsLoading(false);
      }, 1000);
    }
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator style={{ color: "#da1e7a", margin: 15 }} />;
  };

  const handleAddContact = () => {
    Console.log("add Member");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f0f0", paddingTop: 40 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <Text style={styles.name}>
        <AntDesign name="team" size={20} color="black" />
        Team members
      </Text>
      {contacts?.length > 0 ? (
        <FlatList
          data={contacts.slice(0, visibleContacts)} // Display only the visible contacts
          keyExtractor={(item, index) => index.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                clickHandler(item);
              }}
              style={{
                backgroundColor: "#f0f0f0",
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              {item && <ContactItem contact={item} />}
            </TouchableOpacity>
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>NO Chats</Text>
        </View>
      )}
      <View style={{ padding: 10, alignItems: "center" }}>
        <StyledButton onPress={() => handleAddContact()} />
        {/* <Button title="Add Contact" onPress={handleAddContact} /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginLeft: 25,
  },
});
export default React.memo(Index);
