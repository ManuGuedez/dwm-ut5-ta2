import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [value, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder="Ingresa texto..."
        keyboardType="text"
      />
      <Text>Entrada: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "pink",
    borderColor: "red",
    width: 250,
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 20,
  },
});
