import { View } from "react-native";
import CustomText from "../../../../Shared/Components/CustomText";
import { TypeEntity } from "../../../Domain/Entities/TypeEntity";
import { backgroundColorFor, styles } from "./styles";

type PokemonTypeProps = {
  type: TypeEntity;
};
const PokemonType = ({ type }: PokemonTypeProps) => (
  <View style={[styles.wrapper, backgroundColorFor[type.props.name]]}>
    <CustomText fontWeight="bold" style={styles.text}>
      {type.props.name}
    </CustomText>
  </View>
);

export default PokemonType;
