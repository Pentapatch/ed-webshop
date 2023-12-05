import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccentedLabel from "./accentedLabel";

test("renders AccentedLabel with correct text", () => {
  const testText = "Testet lyckades!";
  const { getByText } = render(<AccentedLabel text={testText} />);
  const textElement = getByText(testText);
  expect(textElement).toBeInTheDocument();
});
