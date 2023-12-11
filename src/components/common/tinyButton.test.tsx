import { render, screen, fireEvent } from "@testing-library/react";
import TinyButton from "./tinyButton";

describe("TinyButton", () => {
  test("renders TinyButton correctly", () => {
    render(<TinyButton onClick={() => {}} src="/path/to/image.jpg" />);

    // Assert that the component renders correctly
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("calls onClick when button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<TinyButton onClick={mockOnClick} src="/path/to/image.jpg" />);

    // Trigger a click on the button
    fireEvent.click(screen.getByRole("button"));

    // Assert that onClick is called
    expect(mockOnClick).toHaveBeenCalled();
  });

  test("applies className to the button", () => {
    render(
      <TinyButton
        onClick={() => {}}
        src="/path/to/image.jpg"
        className="custom-class"
      />
    );

    // Assert that the custom class is applied
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  test("applies testId to the button", () => {
    render(
      <TinyButton
        onClick={() => {}}
        src="/path/to/image.jpg"
        testId="customTestId"
      />
    );

    // Assert that the custom testId is applied
    expect(screen.getByTestId("customTestId")).toBeInTheDocument();
  });
});
