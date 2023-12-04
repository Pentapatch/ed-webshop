import Image from "next/image";
import { FlowerProductListDto } from "@/contracts/flowerProductListDto";
import BuyButton from "./buyButton";

interface ProductCardProps {
  product: FlowerProductListDto;
  onClick: (id: number) => void;
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

  return (
    <a
      onClick={() => onClick(product.id)}
      href="#"
      className="flex flex-col text-center bg-white border-2 border-border-beige"
    >
      <Image
        src={product.imagePath}
        alt={`Bild på ${product.title}`}
        width={294}
        height={376}
      />
      <h5 className="text-[14px] lg:text-[24px] mt-3 mx-auto text-center uppercase max-w-[225px] leading-[18px] lg:leading-[34px]">
        {product.title}
      </h5>
      <p>{getPriceRange()}</p>
      <div className="mt-auto">
        <BuyButton product={product} onClick={() => {}} />
      </div>
    </a>
  );
};

export default ProductCard;