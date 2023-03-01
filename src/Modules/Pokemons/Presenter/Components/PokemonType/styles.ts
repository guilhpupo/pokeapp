import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    height: 28,
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#FFFFFF",
    lineHeight: 15,
    paddingHorizontal: 12,
  },
});

const backgroundColorFor = StyleSheet.create({
  grass: {
    backgroundColor: "#9BCC50",
  },
  poison: {
    backgroundColor: "#B97FC9",
  },
  fire: {
    backgroundColor: "#FD7D24",
  },
  water: {
    backgroundColor: "#4592C4",
  },
  bug: {
    backgroundColor: "#729F3F",
  },
  normal: {
    backgroundColor: "#A4ACAF",
  },
  electric: {
    backgroundColor: "EED535",
  },
  fairy: {
    backgroundColor: "#FDB9E9",
  },
  fighting: {
    backgroundColor: "#D56723",
  },
  psychic: {
    backgroundColor: "#F366B9",
  },
  rock: {
    backgroundColor: "#A38C21",
  },
  steel: {
    backgroundColor: "#9EB7B8",
  },
  ice: {
    backgroundColor: "#51C4E7",
  },
  ghost: {
    backgroundColor: "#7B62A3",
  },
  dark: {
    backgroundColor: "#707070",
  },
  flying: {
    backgroundColor: "#3DC7EF",
  },
  ground: {
    backgroundColor: "#F7DE3F",
  },
  dragon: {
    backgroundColor: "#53A4CF",
  },
});

export { styles, backgroundColorFor };
