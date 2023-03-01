import React from "react";
import "./src/Modules/Shared/Container";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  useFonts,
  Fredoka_300Light,
  Fredoka_400Regular,
  Fredoka_600SemiBold,
} from "@expo-google-fonts/fredoka";

import { PokemonEntity } from "./src/Modules/Pokemons/Domain/Entities/PokemonEntity";

import { TypeEntity } from "./src/Modules/Pokemons/Domain/Entities/TypeEntity";
import PokemonCard from "./src/Modules/Pokemons/Presenter/Components/PokemonCard";

export default function App() {
  let [fontsLoaded] = useFonts({
    Fredoka_300Light,
    Fredoka_400Regular,
    Fredoka_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const pokemon = new PokemonEntity({
    name: "Bulbasaur",
    description:
      "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
    number: 1,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    primaryType: new TypeEntity({ name: "grass" }),
    secondaryType: new TypeEntity({ name: "poison" }),
  });

  return (
    <View style={styles.container}>
      <PokemonCard pokemon={pokemon} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003264",
    alignItems: "center",
    justifyContent: "center",
  },
});
