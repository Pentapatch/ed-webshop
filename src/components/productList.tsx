"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import { FlowerProductListDto } from "@/contracts/flowerProductListDto";

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
        {products &&
          products.map((product, index) => <p key={index}>{product.title}</p>)}

        <p>{loadingError}</p>
      </div>
    </div>
  );
};

export default ProductList;
