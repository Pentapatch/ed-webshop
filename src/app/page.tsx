"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductDetails from "@/components/productDetails";
import ProductList from "@/components/productList";
import { FlowerProductDto } from "@/contracts/flowerProductDto";
import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import { getProduct, getProducts } from "@/services/productService";
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
    <main className="">
      <link rel="stylesheet" href="https://use.typekit.net/igm8ala.css"></link>
      <link rel="icon" href="/favicon.png" />
      <Header onGoBackToStore={handleGoBackToStore} />
      <div className="mt-14 md:mt-20"></div>
      {/* Content here */}
      {(selectedProduct && <ProductDetails product={selectedProduct} />) || (
        <ProductList
          products={products}
          loadingError={loadingError}
          handleSelectProduct={handleSelectProduct}
        />
      )}
      <Footer />
    </main>
  );
}
