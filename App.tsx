import React, { useCallback } from "react";
import "./src/Modules/Shared/Container";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Fredoka_300Light,
  Fredoka_400Regular,
  Fredoka_600SemiBold,
} from "@expo-google-fonts/fredoka";
import Home from "./src/Modules/Pokemons/Presenter/Screens/Home";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    Fredoka_300Light,
    Fredoka_400Regular,
    Fredoka_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <Home />
    </View>
  );
};

export default App;
