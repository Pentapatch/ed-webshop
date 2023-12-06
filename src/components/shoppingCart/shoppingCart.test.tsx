import { render, screen, fireEvent } from "@testing-library/react";
import { useShoppingCart } from "./useShoppingCart";
import ShoppingCartPopup from "./shoppingCartPopup";

// Mock useShoppingCart hook
jest.mock("./useShoppingCart");

// Mock closePopup function
const mockClosePopup = jest.fn();
const mockIncreaseQuantity = jest.fn();
const mockDecreaseQuantity = jest.fn();
const mockRemoveItem = jest.fn();

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
    increaseQuantity: mockIncreaseQuantity,
    decreaseQuantity: mockDecreaseQuantity,
    removeItem: mockRemoveItem,
    getCount: jest.fn(() => 2),
    openPopup: jest.fn(),
    closePopup: mockClosePopup,
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

test("renders ShoppingCartPopup component correctly", () => {
  render(<ShoppingCartPopup />);

  // Assert that the component renders when isOpen is true
  expect(screen.getByTestId("shopping-cart-popup")).toBeInTheDocument();
  expect(screen.getByTestId("shopping-cart-close-button")).toBeInTheDocument();
  expect(screen.getByTestId("title")).toBeInTheDocument();
  expect(screen.getByTestId("shopping-cart-list")).toBeInTheDocument();
  expect(
    screen.getByTestId("shopping-cart-checkout-button")
  ).toBeInTheDocument();
});

test("closes the popup when clicking outside the component", () => {
  render(<ShoppingCartPopup />);

  // Click outside the component
  fireEvent.mouseDown(document);

  // Assert that the closePopup function is called
  expect(mockClosePopup).toHaveBeenCalled();
});

test("closes the popup when the close button is clicked", () => {
  render(<ShoppingCartPopup />);

  // Click the close button
  fireEvent.click(screen.getByTestId("shopping-cart-close-button"));

  // Assert that the closePopup function is called
  expect(mockClosePopup).toHaveBeenCalled();
});

test("displays all items in the cart with correct titles", () => {
  // Render the component
  render(<ShoppingCartPopup />);

  // Check the presence of elements for each item of the mocked shopping cart
  expect(screen.getByTestId("shopping-cart-list")).toBeInTheDocument();

  // Check the text content of each product title using data-testid
  expect(screen.getByTestId("shopping-cart-row-title-0")).toHaveTextContent(
    "Product 1 - Variant 1"
  );
  expect(screen.getByTestId("shopping-cart-row-title-1")).toHaveTextContent(
    "Product 2 - Variant 2"
  );
});

test("displays 'Varukorgen är tom' message when the cart is empty", () => {
  // Override the default mocked values
  setupShoppingCartMock({
    shoppingCart: { items: [] },
    getCount: jest.fn(() => 0),
  });

  render(<ShoppingCartPopup />);

  // Assert that the empty cart message is displayed
  expect(screen.getByText("Varukorgen är tom")).toBeInTheDocument();
});

test("does not render ShoppingCartPopup when isOpen is false", () => {
  // Override the default mocked values
  setupShoppingCartMock({
    shoppingCart: { items: [] },
    isOpen: false,
    getCount: jest.fn(() => 0),
  });

  render(<ShoppingCartPopup />);

  // Assert that the shopping cart popup is not rendered
  expect(screen.queryByTestId("shopping-cart-popup")).toBeNull();
});

test("handles increase quantity button click", () => {
  // Render the component
  render(<ShoppingCartPopup />);

  // Find and click the increase quantity button
  const increaseButton = screen.getByTestId(
    "shopping-cart-increase-quantity-button-0"
  );
  fireEvent.click(increaseButton);

  // Assert that the increaseQuantity function is called
  expect(mockIncreaseQuantity).toHaveBeenCalledWith(
    defaultShoppingCart.items[0]
  );
});

test("handles decrease quantity button click", () => {
  // Render the component
  render(<ShoppingCartPopup />);

  // Find and click the increase quantity button
  const decreaseButton = screen.getByTestId(
    "shopping-cart-decrease-quantity-button-1"
  );
  fireEvent.click(decreaseButton);

  // Assert that the increaseQuantity function is called
  expect(mockDecreaseQuantity).toHaveBeenCalledWith(
    defaultShoppingCart.items[1]
  );
});

test("handles remove item button click", () => {
  // Render the component
  render(<ShoppingCartPopup />);

  // Find and click the increase quantity button
  const removeButton = screen.getByTestId("shopping-cart-remove-item-button-0");
  fireEvent.click(removeButton);

  // Assert that the removeItem function is called with the correct item
  expect(mockRemoveItem).toHaveBeenCalledWith(defaultShoppingCart.items[0]);
});
