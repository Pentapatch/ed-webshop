import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCartActionIcon from "./shoppingCartActionIcon";
import { useShoppingCart } from "../shoppingCart/useShoppingCart";

// Mock the useShoppingCart hook
jest.mock("../shoppingCart/useShoppingCart");

// Mock closePopup function
const mockOpenPopup = jest.fn();

const defaultShoppingCart = {
  items: [
    {
      product: { id: 1, title: "Product 1" },
      variant: { id: 1, name: "Variant 1" },
      imagePath: "/path/to/image1.jpg",
      pricePerUnit: 199,
      quantity: 2,
    },
    {
      product: { id: 2, title: "Product 2" },
      variant: { id: 2, name: "Variant 2" },
      imagePath: "/path/to/image2.jpg",
      pricePerUnit: 29,
      quantity: 1,
    },
  ],
};

const setupShoppingCartMock = (customValues = {}) => {
  // Default values
  const defaultValues = {
    shoppingCart: defaultShoppingCart,
    isOpen: true,
    addItem: jest.fn(),
    increaseQuantity: jest.fn(),
    decreaseQuantity: jest.fn(),
    removeItem: jest.fn(),
    getCount: jest.fn(() => 2),
    openPopup: mockOpenPopup,
    closePopup: jest.fn(),
    ...customValues, // Custom values provided in the test
  };

  // Reset the mock implementation for each test
  jest.clearAllMocks();

  // Mock the useShoppingCart hook
  const mockedUseShoppingCart = useShoppingCart as jest.MockedFunction<
    typeof useShoppingCart
  >;
  mockedUseShoppingCart.mockReturnValue(defaultValues);

  return defaultValues;
};

beforeEach(() => {
  setupShoppingCartMock();
});

describe("ShoppingCartActionIcon", () => {
  test("renders ShoppingCartActionIcon correctly", () => {
    render(<ShoppingCartActionIcon icon={<span />} text="Varukorg" />);

    // Assert that the component renders correctly
    expect(screen.getByTestId("shopping-cart-open-button")).toBeInTheDocument();
    expect(
      screen.getByTestId("shopping-cart-total-quantity")
    ).toBeInTheDocument();
    expect(screen.getByText("Varukorg")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("calls openPopup when button is clicked", () => {
    render(<ShoppingCartActionIcon icon={<span />} text="Varukorg" />);

    // Trigger a click on the button
    fireEvent.click(screen.getByTestId("shopping-cart-open-button"));

    // Assert that openPopup is called
    expect(mockOpenPopup).toHaveBeenCalled();
  });
});
