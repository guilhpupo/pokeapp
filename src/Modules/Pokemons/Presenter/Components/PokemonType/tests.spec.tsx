import { render, screen } from "@testing-library/react-native";
import PokemonType from ".";
import { TypeEntity } from "../../../Domain/Entities/TypeEntity";

describe("<PokemonType />", () => {
  it("should render a text with the same name of type entity", () => {
    const typeEntity = new TypeEntity({ name: "grass" });
    const { root } = render(<PokemonType type={typeEntity} />);

    expect(screen.getByText(/grass/i)).toBeDefined();
    expect(root).toMatchSnapshot();
  });
});
