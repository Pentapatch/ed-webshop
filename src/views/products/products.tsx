import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import { useEffect } from "react";
import AccentedLabel from "../../components/common/accentedLabel";
import GraphicalInfo from "../../components/layout/graphicalInfo";
import HeroBanner from "../../components/layout/heroBanner";
import ProductCard from "./productCard";
import ErrorDisplay from "@/components/common/errorDisplay";

interface ProductsProps {
  products: FlowerProductListDto[];
  loadingError: string | null;
  navigationSection: string | null;
  onSelectProduct: (productId: number, variantId: number | undefined) => void;
}

const Products: React.FC<ProductsProps> = ({
  products,
  loadingError,
  navigationSection,
  onSelectProduct,
}) => {
  useEffect(() => {
    if (navigationSection) {
      const targetElement = document.getElementById(navigationSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [navigationSection]);

  return (
    <>
      <HeroBanner
        title="Torkade Blommor"
        message={[
          "Lågt klimatavtryck, stilrent och unikt.",
          "Inred med torkade blommor från Blombruket!",
        ]}
        buttonText="Till alla produkter"
        href="#products"
      />
      <div className="flex justify-center">
        <div className="w-full md:w-3/4">
          <GraphicalInfo />
          <div id="products"></div>
          <AccentedLabel text="✔︎ FRI FRAKT VID KÖP ÖVER 500 KR" />
          {/* Product list */}
          <div className="grid grid-cols-2 px-3 md:px-0 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4 mb-4">
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={onSelectProduct}
                />
              ))
            ) : (
              <p>Det finns inga produkter att visa.</p>
            )}
          </div>
          {/* Loading error display */}
          {loadingError && (
            <ErrorDisplay text={loadingError} className="mb-8" />
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
