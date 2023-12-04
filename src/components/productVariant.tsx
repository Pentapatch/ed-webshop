import { ProductVariantDto } from "@/contracts/productVariantDto";

interface ProductVariantProps {
  variant: ProductVariantDto;
  selectedId: number;
  handleSelectVariant: (variant: ProductVariantDto) => void;
}

const ProductVariant: React.FC<ProductVariantProps> = ({
  variant,
  selectedId,
  handleSelectVariant,
}) => {
  const isSelected = variant.id === selectedId;

  return (
    <button
      onClick={() => handleSelectVariant(variant)}
      className={`uppercase px-8 py-4 border-2 hover:bg-light-gray ${
        isSelected ? "border-black bg-medium-gray" : ""
      }`}
    >
      <div className="flex justify-between">
        <span className="font-bold">{variant.name}</span>
        <span>{variant.price} kr</span>
      </div>
    </button>
  );
};

export default ProductVariant;
