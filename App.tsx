import "./src/Modules/Shared/Container";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { container } from "tsyringe";
import { ListPokemonsUseCase } from "./src/Modules/Pokemons/Domain/UseCases/ListPokemonsUseCase";
import { useEffect } from "react";

export default function App() {
  const useCase = container.resolve(ListPokemonsUseCase);
  useEffect(() => {
    useCase.execute({ skip: 0, take: 1 }).then((result) => console.log(result));
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
