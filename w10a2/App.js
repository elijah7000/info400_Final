import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FirebaseFetcher } from "./FirebaseFetcher";

// To add data
db.collection("students").add({});

const gradebook = [
  { name: "Alice", grade: 90, abbsence: 1, id: 0 },
  { name: "Bob", grade: 85, abbsence: 2, id: 1 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <FirebaseFetcher />
      <StatusBar style="auto" />
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
