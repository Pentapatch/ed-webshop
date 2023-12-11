import { render } from "@testing-library/react";
import AccentedLabel from "./accentedLabel";

test("renders AccentedLabel with correct text", () => {
  const testText = "Testet lyckades!";
  const { getByText } = render(<AccentedLabel text={testText} />);
  const textElement = getByText(testText);
  expect(textElement).toBeInTheDocument();
});

test("renders AccentedLabel with different text values", () => {
  const testText1 = "Första texten";
  const testText2 = "Andra texten";

  const { getByText } = render(<AccentedLabel text={testText1} />);
  expect(getByText(testText1)).toBeInTheDocument();

  render(<AccentedLabel text={testText2} />);
  expect(getByText(testText2)).toBeInTheDocument();
});
