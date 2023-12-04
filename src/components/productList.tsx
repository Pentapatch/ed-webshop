"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import ProductCard from "./productCard";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const [products, setProducts] = useState<FlowerProductListDto[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState("");

  const handleGetProducts = async () => {
    await getProducts()
      .then((response) => {
        setProducts(response);
        setLoadingError("");
      })
      .catch((error) => {
        setProducts([]);
        setLoadingError("Kunde inte hämta produkter: " + error.message);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-2 px-3 md:px-0 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4">
          {(products &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))) || <p>{loadingError}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
