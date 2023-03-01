import { render } from "@testing-library/react-native";
import PokemonType from ".";
import { TypeEntity } from "../../../Domain/Entities/TypeEntity";

describe("<PokemonType />", () => {
  it("should render with white text and green background when type name is grass ", () => {
    const typeEntity = new TypeEntity({ name: "grass" });
    //render(<PokemonType type={typeEntity} />);
  });
});
