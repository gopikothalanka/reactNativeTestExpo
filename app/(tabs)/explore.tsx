import Ionicons from "@expo/vector-icons/Ionicons";
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

export default function TabTwoScreen() {
  return (
    <View style={{ paddingTop: 50 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <Text>Second screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
