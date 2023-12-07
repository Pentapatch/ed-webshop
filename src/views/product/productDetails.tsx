import { useShoppingCart } from "@/components/shoppingCart/useShoppingCart";
import { FlowerProductDto } from "@/contracts/flowerProductDto";
import { ProductVariantDto } from "@/contracts/productVariantDto";
import Image from "next/image";
import { useState } from "react";
import ActionButton from "../../components/common/actionButton";
import ProductVariantList from "./productVariantList";

interface ProductDetailsProps {
  product: FlowerProductDto;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addItem } = useShoppingCart();

  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariantDto | null>(
      product.variants.length > 0 ? product.variants[0] : null
    );

  const handleSelectVariant = (variant: ProductVariantDto) => {
    setSelectedVariant(variant);
  };

  const handleAddToCart = () => {
    if (selectedVariant === null) return;

    addItem(product, selectedVariant);
  };

  return (
    <div className="mt-4 md:mt-40 flex justify-center">
      <div className="w-full md:w-3/4">
        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-4 md:gap-16">
          {/* Image */}
          <Image
            src={product.imagePath}
            alt={`Bild på ${product.title}`}
            width={620}
            height={780}
          />
          <div>
            {/* Product title header */}
            <h1 className="font-ivypresto font-semibold text-center md:text-left text-4xl md:text-7xl">
              {product.title}
            </h1>
            <div className="px-4 md:px-0">
              {/* Short description */}
              <p className="mt-10 text-dark-gray md:text-xl font-thin">
                {product.description}
              </p>
              {/* Price */}
              <p className="mt-8 mb-8 font-bold text-3xl">
                <span>{selectedVariant?.price}</span> kr
              </p>
              {/* Variant selector (if multiple exist) */}
              {product.variants.length > 1 && (
                <ProductVariantList
                  product={product}
                  selectedId={selectedVariant?.id ?? -1}
                  handleSelectVariant={handleSelectVariant}
                />
              )}
              {/* Add to cart button */}
              <ActionButton
                onClick={handleAddToCart}
                text="Lägg till i varukorg"
              />
            </div>
          </div>
        </div>
        {/* Detailed information */}
        <div className="flex justify-center mt-4 md:mt-24">
          <div className="px-4 md:px-0 md:w-2/3">
            {/* Product title header */}
            <h3 className="font-brandonGrotesque font-medium uppercase text-xl mb-2">
              {product.title}
            </h3>
            {/* Product long description */}
            <p className="font-thin">{product.longDescription}</p>
            {/* Length and weight */}
            <p className="mt-4 font-thin">
              <span className="font-medium">Längd: </span>
              <span>ca {product.length} cm</span>
              <span className="font-medium ml-2">Vikt: </span>
              <span>ca {product.weight} gram</span>
            </p>
            {/* Tips for dried flowers */}
            <h3 className="mt-8 text-dark-gray font-brandonGrotesque font-medium uppercase text-xl mb-2">
              TIPS FÖR TORKADE BLOMMOR:
            </h3>
            <ul className="mb-8 space-y-2 font-thin">
              <li>✔︎ Klipp stjälkarna med en sax eller sekatör</li>
              <li>
                ✔︎ Använd sand i botten på vasen för att hålla stjälkarna på
                plats
              </li>
              <li>
                ✔︎ Använd en hårfön för att blåsa bort eventuellt damm som
                bildas
              </li>
              <li>✔︎ Förvara blommorna i lådan som medföljer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
