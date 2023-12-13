// import { Text, View } from "react-native";
// import Constants from "expo-constants";
// import React from "react";
// import RepositoryList from "./RepositoryList";
// import AppBar from "./AppBar";
// import { Redirect, Switch, Route, Routes } from "react-router-native";

// function Main() {
//   return (
//     <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
//       <AppBar />
//       <Routes>
//         <Route path="/" exact>
//           <RepositoryList />
//         </Route>
//         <Route>
//           <Text> Working on it </Text>
//         </Route>
//         <Redirect to="/" />
//       </Routes>
//     </View>
//   );
// }

// export default Main;

import { Text, View } from "react-native";
import Constants from "expo-constants";
import React from "react";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Redirect } from "react-router-native";

function Main() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/working" element={<Text>Working on it</Text>} />
        <Route path="*" element={<Redirect to="/" />} />
      </Routes>
    </View>
  );
}

export default Main;
