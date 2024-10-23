import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [value, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TA 2</Text>
      <View style={styles.content}>
        <TextInput
          style={styles.inputArea}
          onChangeText={onChangeText}
          value={value}
          placeholder="Ingresa texto..."
          keyboardType="text"
        />
        <Text style={styles.text}>Entrada:</Text>
        <View style={styles.outputArea}>
          <Text style={styles.output}>{value}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#f2dbd6",
    padding: 20,
    borderRadius: 15,
    minWidth: 350
  },
  inputArea: {
    backgroundColor: "pink",
    borderColor: "red",
    width: 250,
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20
  },
  text: {
    color: "#da9dbc",
    fontWeight: "bold",
    fontSize: 20,
  },
  outputArea: {
    minWidth: 200,
    maxWidth: 300,
    height: "auto",
    backgroundColor: "lightgrey",
    minHeight: 50,
    borderRadius: 10,
    borderColor: "#da9dbc",
    borderWidth: 3,
    padding: 10,
  },
  output: {
    fontSize: 17,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
