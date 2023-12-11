import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getProduct, getProducts } from "./productService";

// Skapa en ny instans av axios-mock-adapter
const mock = new MockAdapter(axios);

// Mocka API-anropet för att hämta alla produkter
mock
  .onGet(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/products`)
  .reply(200, [
    // Mockade produkter
    { id: 1, name: "Produkt 1" },
    { id: 2, name: "Produkt 2" },
  ]);

// Mocka API-anropet för att hämta en specifik produkt (id: 1)
mock
  .onGet(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/products/1`)
  .reply(200, {
    id: 1,
    title: "Mockad Produkt 1",
  });

describe("API-funktioner", () => {
  it("hämtar produkter korrekt", async () => {
    const products = await getProducts();
    expect(products).toHaveLength(2);
  });

  it("hämtar en specifik produkt korrekt", async () => {
    const product = await getProduct(1);
    expect(product.id).toBe(1);
    expect(product.title).toBe("Mockad Produkt 1");
  });

  it("hanterar fel vid hämtning av produkter", async () => {
    // Mocka ett fel vid hämtning av produkter
    mock.onGet(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/products`).reply(500);

    await expect(getProducts()).rejects.toThrow("Ingen kontakt med servern.");
  });

  it("hanterar fel vid hämtning av en specifik produkt", async () => {
    const productId = 1;

    // Mocka ett fel vid hämtning av en specifik produkt
    mock
      .onGet(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/products/${productId}`)
      .reply(404);

    await expect(getProduct(productId)).rejects.toThrow("Ingen kontakt med servern.");
  });
});
