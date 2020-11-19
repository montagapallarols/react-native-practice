import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GameScreen from "./screens/GameScreen";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function GameTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Play" component={GameScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center"
    }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Welcome!" }}/>
        <Stack.Screen name="Game" component={GameTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
 
}





// flexDirection, alignItems, justifyContent, alignSelf




// import React, { useRef, useState } from "react";
// import { Text, View, ActivityIndicator, Image, Button, Alert, FlatList, TouchableOpacity, TextInput } from "react-native";

// function MyHeader() {
//   return <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
//   <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
//     Hello React Native
//   </Text>
//   <ActivityIndicator
//     size="large"
//     color="#c1262c"
//     style={{ marginBottom: 30 }}
//   />
//     </View>
// }

// function MyFooter() {
//   const [value, setValue] = useState("");

//   return (
//   <View>
//   <View
//   style={{
//     borderWidth: 2,
//     borderColor: "black",
//     padding: 20,
//     marginBottom: 30
//   }}
//   >
//   <Text>Hello again!</Text>
//   </View>
//   <Button
//   onPress={() => Alert.alert(value)}
//   title="Learn More"
//   color="#c1262c"
//   />
//   <TextInput
//   style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//   onChangeText={text => setValue(text)}
//   value={value}
//   />
//   </View>
//   )
//   }

// export default function App() {
//   const randomNum = useRef(Math.random()).current;

//   return (
    
//       <FlatList
//       ListHeaderComponent={MyHeader}
//       data={[0, 1, 2, 3, 4]}
//       renderItem={({ item }) => {
//       return (
//       <TouchableOpacity
//         onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
//       >
//         <Image
//           source={{
//             uri: `https://picsum.photos/500/300?random=${randomNum +
//               item}`
//           }}
//           style={{ width: "100%", height: 160, marginBottom: 30 }}
//         />
//       </TouchableOpacity>
//       );
//       }}
//       keyExtractor={item => String(item)}
//       ListFooterComponent={MyFooter}
      
//       />
//   );
// }

