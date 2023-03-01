import { StyleProp, Text, TextStyle } from "react-native";
import { styles } from "./styles";

type CustomTextProps = {
  children: string;
  fontWeight?: "bold" | "regular" | "light";
  style?: StyleProp<TextStyle>;
};

const CustomText = ({
  children,
  style,
  fontWeight = "regular",
}: CustomTextProps) => {
  const customFontStyle =
    fontWeight === "bold"
      ? styles.bold
      : fontWeight === "light"
      ? styles.light
      : styles.regular;

  return <Text style={[style, customFontStyle]}>{children}</Text>;
};

export default CustomText;
