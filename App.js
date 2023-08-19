import { StyleSheet, View } from "react-native";
import Task from "./src/Task";

export default function App() {
  return (
    <View>
      <Task />
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
