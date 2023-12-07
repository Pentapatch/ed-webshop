"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ShoppingCartProvider } from "@/components/shoppingCart/shoppingCartProvider";
import { FlowerProductDto } from "@/contracts/flowerProductDto";
import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
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
    <ShoppingCartProvider onSelectProduct={handleSelectProduct}>
      <main className="font-openSans">
        {/* Header */}
        <Header onGoBackToStore={handleGoBackToStore} />
        {/* View content */}
        <div className="mt-14 md:mt-20"></div>
        {(selectedProduct && <ProductDetails product={selectedProduct} />) || (
          <Products
            products={products}
            loadingError={loadingError}
            onSelectProduct={handleSelectProduct}
          />
        )}
        {/* Footer */}
        <Footer />
      </main>
    </ShoppingCartProvider>
  );
}
