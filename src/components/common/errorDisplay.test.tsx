import { render } from "@testing-library/react";
import ErrorDisplay from "./errorDisplay";

test("renders ErrorDisplay with correct text", () => {
  const testText = "Test error message";
  const { getByText } = render(<ErrorDisplay text={testText} />);
  const textElement = getByText(testText);
  expect(textElement).toBeInTheDocument();
});

test("renders ErrorDisplay with different text values", () => {
  const testText1 = "First error message";
  const testText2 = "Second error message";

  const { getByText } = render(<ErrorDisplay text={testText1} />);
  expect(getByText(testText1)).toBeInTheDocument();

  render(<ErrorDisplay text={testText2} />);
  expect(getByText(testText2)).toBeInTheDocument();
});

test("renders ErrorDisplay with custom className", () => {
  const testText = "Test error message";
  const customClassName = "custom-error-class";

  const { getByText, container } = render(
    <ErrorDisplay text={testText} className={customClassName} />
  );

  const textElement = getByText(testText);
  const renderedElement = container.firstChild;

  expect(textElement).toBeInTheDocument();
  expect(renderedElement).toHaveClass(customClassName);
});
