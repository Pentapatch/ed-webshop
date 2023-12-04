import { FlowerProductDto } from "@/contracts/flowerProductDto";
import { ProductVariantDto } from "@/contracts/productVariantDto";
import ProductVariant from "./productVariant";

interface ProductVariantListProps {
  product: FlowerProductDto;
  selectedId: number;
  handleSelectVariant: (variant: ProductVariantDto) => void;
}

const ProductVariantList: React.FC<ProductVariantListProps> = ({
  product,
  selectedId,
  handleSelectVariant,
}) => {
  return (
    <div className="flex flex-col gap-2 mt-6">
      {product.variants.map((variant, index) => (
        <ProductVariant
          variant={variant}
          key={index}
          selectedId={selectedId}
          handleSelectVariant={handleSelectVariant}
        />
      ))}
    </div>
  );
};

export default ProductVariantList;
