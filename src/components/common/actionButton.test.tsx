// actionButton.test.tsx
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionButton from "./actionButton";

test("renders ActionButton with correct text", () => {
  const testText = "Klicka här";
  const { getByText } = render(
    <ActionButton onClick={() => {}} text={testText} />
  );
  const buttonElement = getByText(testText);
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick handler when button is clicked", () => {
  const handleClick = jest.fn();
  const testText = "Klicka här";
  const { getByText } = render(
    <ActionButton onClick={handleClick} text={testText} />
  );
  const buttonElement = getByText(testText);

  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
