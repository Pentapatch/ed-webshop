import { render, screen } from "@testing-library/react";
import ShoppingCartActionIcon from "./shoppingCartActionIcon";

describe("ShoppingCartActionIcon", () => {
  test("renders with correct text", () => {
    const testText = "Varukorg";
    const { getByText } = render(
      <ShoppingCartActionIcon text={testText} icon={<span />} href="#" />
    );

    const textElement = getByText(testText);
    expect(textElement).toBeDefined();
  });

  test("renders with correct href", () => {
    const testHref = "/varukorg";
    const { getByText } = render(
      <ShoppingCartActionIcon text="Varukorg" icon={<span />} href={testHref} />
    );

    const linkElement = getByText("Varukorg").closest("a");
    expect(linkElement).toBeDefined();
    expect(linkElement?.getAttribute("href")).toBe(testHref);
  });

  test("renders with correct number of items in cart", () => {
    const testNumberOfItemsInCart = 5;
    const { getByText } = render(
      <ShoppingCartActionIcon
        text="Varukorg"
        icon={<span />}
        href="#"
        numberOfItemsInCart={testNumberOfItemsInCart}
      />
    );

    const numberOfItemsInCartElement = getByText(
      testNumberOfItemsInCart.toString()
    );
    expect(numberOfItemsInCartElement).toBeDefined();
  });

  test("renders with correct number of items in cart (zero)", () => {
    const testNumberOfItemsInCart = 0;
    const { getByText } = render(
      <ShoppingCartActionIcon
        text="Varukorg"
        icon={<span />}
        href="#"
        numberOfItemsInCart={testNumberOfItemsInCart}
      />
    );

    const numberOfItemsInCartElement = getByText(
      testNumberOfItemsInCart.toString()
    );
    expect(numberOfItemsInCartElement).toBeDefined();
  });

  test("renders with default number of items in cart", () => {
    const { getByText } = render(
      <ShoppingCartActionIcon text="Varukorg" icon={<span />} href="#" />
    );

    const numberOfItemsInCartElement = getByText("0"); // Antalet bör vara 0 som standard
    expect(numberOfItemsInCartElement).toBeDefined();
  });
});
