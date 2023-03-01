import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "#290505",
    borderWidth: 2,
    borderRadius: 20,
    width: "100%",
    backgroundColor: "#F0F0F0",
    padding: 20,
  },
  name: {
    fontSize: 16,
    lineHeight: 19.36,
    textTransform: "uppercase",
    color: "#290505",
  },
  main: {
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center",
  },
  picture: {
    width: 120,
    height: 120,
    marginRight: 20,
  },
  info: {
    justifyContent: "space-between",
  },
  description: {
    lineHeight: 14.52,
    fontSize: 12,
    color: "#290505",
  },
  types: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
});

export { styles };
