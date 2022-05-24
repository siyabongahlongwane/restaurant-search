import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my first React Native App!</Text>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
