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
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariantDto | null>(
      product.variants.length > 0 ? product.variants[0] : null
    );

  const handleSelectVariant = (variant: ProductVariantDto) => {
    setSelectedVariant(variant);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart logic
    console.log("Add to cart clicked");
  };

  return (
    <div className="mt-4 md:mt-40 flex justify-center">
      <div className="w-full md:w-3/4">
        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-4 md:gap-16">
          <div className="">
            <Image
              src={product.imagePath}
              alt={`Bild på ${product.title}`}
              width={620}
              height={780}
            />
          </div>
          <div className="">
            <h1 className="font-ivypresto text-center md:text-left text-4xl md:text-7xl">
              {product.title}
            </h1>
            <div className="px-4 md:px-0">
              <p className="mt-8">{product.description}</p>
              <p className="mt-8 font-bold text-2xl">
                <span>{selectedVariant?.price}</span> kr
              </p>
              {product.variants.length > 1 && (
                <ProductVariantList
                  product={product}
                  selectedId={selectedVariant?.id ?? -1}
                  handleSelectVariant={handleSelectVariant}
                />
              )}
              <ActionButton
                onClick={handleAddToCart}
                text="Lägg till i varukorg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 md:mt-24">
          <div className="px-4 md:px-0 md:w-2/3">
            <h3 className="uppercase text-xl mb-2">{product.title}</h3>
            <p>{product.longDescription}</p>
            <p className="mt-2">
              <span className="font-bold">Längd: </span>
              <span>ca {product.length} cm</span>
              <span className="font-bold ml-2">Vikt: </span>
              <span>ca {product.weight} gram</span>
            </p>
            <h3 className="mt-8 uppercase text-xl mb-2">
              TIPS FÖR TORKADE BLOMMOR:
            </h3>
            <ul className="mb-8 space-y-2">
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
