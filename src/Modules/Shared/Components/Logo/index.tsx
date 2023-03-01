import { Image } from "expo-image";
import { styles } from "./styles";

const Logo = () => (
  <Image
    style={styles.wrapper}
    source={require("../../../../../assets/logo.png")}
  />
);

export default Logo;
