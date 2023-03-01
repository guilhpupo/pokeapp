import "reflect-metadata";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { container, Registry } from "./src/Modules/Shared/ContainerRegistry";
import { ListPokemonsUseCase } from "./src/Modules/Pokemons/Domain/UseCases/ListPokemonsUseCase";
import { useEffect } from "react";

export default function App() {
  const listPokemonsUseCase = container.get<ListPokemonsUseCase>(
    Registry.ListPokemonsUseCase
  );
  useEffect(() => {
    listPokemonsUseCase.execute({}).then((result) => console.log(result));
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
