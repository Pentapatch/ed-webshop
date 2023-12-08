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
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [selectedProductVariantId, setSelectedProductVariantId] = useState<
    number | null
  >(null);
  const [navigationSection, setNavigationSection] = useState<string | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] =
    useState<FlowerProductDto | null>(null);

  const handleGetProducts = async () => {
    await getProducts()
      .then((response) => {
        setProducts(response);
        setLoadingError(null);
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
        setLoadingError(null);
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
      if (!loadingError) window.scrollTo(0, 0);
      handleGetProduct(selectedProductId);
    }
  }, [selectedProductId, loadingError]);

  const handleSelectProduct = (
    productId: number,
    variantId: number | undefined
  ) => {
    setSelectedProductId(productId);
    setSelectedProductVariantId(variantId ?? null);
  };

  const handleGoBackToStore = (navigationSection?: string) => {
    setSelectedProduct(null);
    setSelectedProductId(null);
    setNavigationSection(navigationSection || null);
  };

  return (
    <ShoppingCartProvider onSelectProduct={handleSelectProduct}>
      <main className="font-openSans">
        {/* Header */}
        <Header onGoBackToStore={handleGoBackToStore} />
        {/* View content */}
        <div className="mt-14 md:mt-20"></div>
        {(selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            variantId={selectedProductVariantId}
            onGoBackToStore={handleGoBackToStore}
          />
        )) || (
          <Products
            products={products}
            loadingError={loadingError}
            onSelectProduct={handleSelectProduct}
            navigationSection={navigationSection}
          />
        )}
        {/* Footer */}
        <Footer />
      </main>
    </ShoppingCartProvider>
  );
}
