import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import AccentedLabel from "../../components/common/accentedLabel";
import GraphicalInfo from "../../components/layout/graphicalInfo";
import HeroBanner from "../../components/layout/heroBanner";
import ProductCard from "./productCard";

interface ProductsProps {
  products: FlowerProductListDto[];
  loadingError?: string;
  handleSelectProduct: (id: number) => void;
}

const Products: React.FC<ProductsProps> = ({
  products,
  loadingError = "",
  handleSelectProduct,
}) => {
  return (
    <>
      <HeroBanner
        title="Torkade Blommor"
        message={[
          "Lågt klimatavtryck, stilrent och unikt.",
          "Inred med torkade blommor från Blombruket!",
        ]}
        buttonText="Till alla produkter"
        href="#list"
      />
      <div className="flex justify-center">
        <div className="w-full md:w-3/4">
          <GraphicalInfo />
          <div id="list"></div>
          <AccentedLabel text="✔︎ FRI FRAKT VID KÖP ÖVER 500 KR" />
          <div className="grid grid-cols-2 px-3 md:px-0 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4 mb-4">
            {(products &&
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={handleSelectProduct}
                />
              ))) || <p>{loadingError}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
