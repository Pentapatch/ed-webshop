"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ShoppingCartPopup from "@/components/layout/shoppingCartPopup";
import { FlowerProductDto } from "@/contracts/flowerProductDto";
import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import { ProductVariantDto } from "@/contracts/productVariantDto";
import { ShoppingCart } from "@/models/shoppingCart";
import { ShoppingCartEntry } from "@/models/shoppingCartEntry";
import { getProduct, getProducts } from "@/services/productService";
import ProductDetails from "@/views/product/productDetails";
import Products from "@/views/products/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<FlowerProductListDto[]>([]);
  const [loadingError, setLoadingError] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] =
    useState<FlowerProductDto | null>(null);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    items: [],
  });

  const handleAddItemToCart = (
    product: FlowerProductDto,
    variant: ProductVariantDto
  ) => {
    const existingItem = shoppingCart.items.find(
      (item) => item.product.id === product.id && item.variant.id === variant.id
    );

    if (existingItem) {
      existingItem.quantity += 1;

      setShoppingCart((prevCart) => ({
        items: [...prevCart.items],
      }));
    } else {
      const newItem: ShoppingCartEntry = {
        product: { id: product.id, title: product.title },
        variant: { id: variant.id, name: variant.name },
        imagePath: product.imagePath,
        pricePerUnit: variant.price,
        quantity: 1,
      };

      setShoppingCart((prevCart) => ({
        items: [...prevCart.items, newItem],
      }));
    }
  };

  const getNumberOfItemsInShoppingCart = () => {
    return shoppingCart.items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const handleGetProducts = async () => {
    await getProducts()
      .then((response) => {
        setProducts(response);
        setLoadingError("");
      })
      .catch((error) => {
        setProducts([]);
        setLoadingError("Kunde inte hämta produkter: " + error.message);
      });
  };

  const handleGetProduct = async (id: number) => {
    await getProduct(id)
      .then((response) => {
        setSelectedProduct(response);
        setLoadingError("");
      })
      .catch((error) => {
        setSelectedProduct(null);
        setLoadingError("Kunde inte hämta produkt: " + error.message);
      });
  };

  useEffect(() => {
    handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedProductId) {
      handleGetProduct(selectedProductId);
    }
  }, [selectedProductId]);

  const handleSelectProduct = (id: number) => {
    setSelectedProductId(id);
  };

  const handleGoBackToStore = () => {
    setSelectedProduct(null);
    setSelectedProductId(null);
  };

  return (
    <main className="">
      <link rel="stylesheet" href="https://use.typekit.net/igm8ala.css"></link>
      <link rel="icon" href="/favicon.png" />
      <Header
        onGoBackToStore={handleGoBackToStore}
        numberOfItemsInCart={getNumberOfItemsInShoppingCart()}
      />
      <div className="mt-14 md:mt-20"></div>
      {/* Content here */}
      <ShoppingCartPopup cart={shoppingCart} />
      {(selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onAddItemToCart={handleAddItemToCart}
        />
      )) || (
        <Products
          products={products}
          loadingError={loadingError}
          handleSelectProduct={handleSelectProduct}
        />
      )}
      <Footer />
    </main>
  );
}
