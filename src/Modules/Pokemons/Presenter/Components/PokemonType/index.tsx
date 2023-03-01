import { View } from "react-native";
import { TypeEntity } from "../../../Domain/Entities/TypeEntity";

type PokemonTypeProps = {
  type: TypeEntity;
};
const PokemonType = ({ type }: PokemonTypeProps) => (
  <View>{type.props.name.toUpperCase()}</View>
);

export default PokemonType;
