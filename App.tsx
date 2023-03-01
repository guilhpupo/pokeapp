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
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

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
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#003264",
      }}
      onLayout={onLayoutRootView}
    >
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
