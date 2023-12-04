import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import ProductCard from "./productCard";
import Accent from "./accent";
import GraphicalInfo from "./graphicalInfo";

interface ProductListProps {
  products: FlowerProductListDto[];
  loadingError?: string;
  handleSelectProduct: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  loadingError = "",
  handleSelectProduct,
}) => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4">
        <GraphicalInfo />
        <Accent text="✔︎ FRI FRAKT VID KÖP ÖVER 500 KR" />
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
  );
};

export default ProductList;
