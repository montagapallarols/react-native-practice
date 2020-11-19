import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import GameScreen from "../screens/GameScreen";

export default function HomeScreen({navigation}) {
    const [ count, setCount ] = useState(1);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Welcome to Colour Picker!
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Times i've been here: {count}</Text>
      <Button title="Go to Game" onPress={() => navigation.navigate("Game", {count})} />
    </View>
  );
}