import { render, screen } from "@testing-library/react-native";
import CustomText from ".";

describe("<CustomText />", () => {
  it("should render the given text", () => {
    render(<CustomText>test</CustomText>);
    expect(screen.getByText(/test/i)).toBeDefined();
  });
  it("should render the given text", () => {
    const { root } = render(<CustomText>test</CustomText>);
    expect(root).toMatchSnapshot();
  });
});
