import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import AccentedLabel from "../../components/common/accentedLabel";
import GraphicalInfo from "../../components/layout/graphicalInfo";
import HeroBanner from "../../components/layout/heroBanner";
import ProductCard from "./productCard";
import { useEffect } from "react";

interface ProductsProps {
  products: FlowerProductListDto[];
  loadingError?: string;
  navigationSection: string | null;
  onSelectProduct: (productId: number, variantId: number | undefined) => void;
}

const Products: React.FC<ProductsProps> = ({
  products,
  loadingError = "",
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
          <div className="grid grid-cols-2 px-3 md:px-0 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4 mb-4">
            {(products &&
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={onSelectProduct}
                />
              ))) || <p>{loadingError}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
