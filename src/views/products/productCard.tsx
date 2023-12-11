import Image from "next/image";
import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import ActionButton from "../../components/common/actionButton";

interface ProductCardProps {
  product: FlowerProductListDto;
  onClick: (productId: number, variantId: number | undefined) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const currency: string = "kr";

  const getPriceRange = () => {
    const minPrice = product.variants.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    );
    const maxPrice = product.variants.reduce((prev, current) =>
      prev.price > current.price ? prev : current
    );

    return minPrice.price === maxPrice.price
      ? `${minPrice.price} ${currency}`
      : `${minPrice.price} - ${maxPrice.price} ${currency}`;
  };

  const handleOrder = () => {
    onClick(product.id, undefined);
  };

  return (
    <a
      onClick={() => onClick(product.id, undefined)}
      className="flex flex-col text-center bg-white border-2 border-border-beige cursor-pointer"
      id={product.title}
    >
      {/* Image */}
      <Image
        src={product.imagePath}
        alt={`Bild på ${product.title}`}
        width={294}
        height={376}
      />
      {/* Title */}
      <h5 className="font-brandonGrotesque mb-4 font-medium text-[14px] lg:text-[24px] mt-3 mx-auto text-center uppercase max-w-[225px] leading-[18px] lg:leading-[34px]">
        {product.title}
      </h5>
      <div className="mt-auto">
        {/* Price range */}
        <p className="my-2">{getPriceRange()}</p>
        {/* Order button */}
        <ActionButton onClick={handleOrder} text="Beställ" className="mb-6" />
      </div>
    </a>
  );
};

export default ProductCard;
