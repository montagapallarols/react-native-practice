import React from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  return <GameScreen />;
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

