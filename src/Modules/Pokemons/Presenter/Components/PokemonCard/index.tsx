import { View } from "react-native";
import CustomText from "../../../../Shared/Components/CustomText";
import { PokemonEntity } from "../../../Domain/Entities/PokemonEntity";
import { styles } from "./styles";
import { Image } from "expo-image";
import PokemonType from "../PokemonType";

type PokemonCardProps = {
  pokemon: PokemonEntity;
};
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const addLeftZerosToNumber = (number: number) => {
    const str = "" + number;
    const pad = "0000";
    return pad.substring(0, pad.length - str.length) + str;
  };
  return (
    <View style={styles.wrapper}>
      <CustomText style={styles.name}>{`${addLeftZerosToNumber(
        pokemon.props.number
      )} - ${pokemon.props.name}`}</CustomText>
      <View style={styles.main}>
        <Image source={pokemon.props.imageUrl} style={styles.picture} />
        <View style={styles.info}>
          <CustomText fontWeight="light" style={styles.description}>
            {pokemon.props.description.replace("\n", " ")}
          </CustomText>
          <View style={styles.types}>
            <PokemonType type={pokemon.props.primaryType} />
            {pokemon.props.secondaryType && (
              <PokemonType type={pokemon.props.secondaryType} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PokemonCard;
