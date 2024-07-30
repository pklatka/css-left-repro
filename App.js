import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const App = () => {
  const [right, setRight] = React.useState(30);

  return (
    <View>
      <View style={[styles.container, {
        position: "relative",
        right
      }]}>
        <Text style={styles.text}>Position: relative</Text>
      </View>
      <View style={[styles.container, {
        position: "absolute",
        top: 250,
        right
      }]}>
        <Text style={styles.text}>Position: absolute</Text>
      </View>
      <Button style={styles.button} title="Change right value" onPress={() => setRight(right === 30 ? undefined : 30)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "red",
    left: "auto",
  },
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    position: 'absolute',
    top: 600,
  }
});

export default App;
