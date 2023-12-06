import { ShoppingCartEntry } from "@/models/shoppingCartEntry";
import Image from "next/image";
import React from "react";
import TinyButton from "../common/tinyButton";
import { useShoppingCart } from "./useShoppingCart";

interface ShoppingCartRowProps {
  item: ShoppingCartEntry;
  length: number;
  index: number;
}

const ShoppingCartRow: React.FC<ShoppingCartRowProps> = ({
  item,
  length,
  index,
}) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useShoppingCart();

  const handleIncreaseQuantity = () => increaseQuantity(item);
  const handleDecreaseQuantity = () => decreaseQuantity(item);
  const handleRemoveItem = () => removeItem(item);

  const getLinePrice = () => item.pricePerUnit * item.quantity;

  return (
    <li
      key={index}
      className="flex justify-between items-center text-sm md:text-base py-1"
      style={{
        borderBottom: index < length - 1 ? "2px solid #f9f4e8" : "none",
      }}
    >
      {/* Image */}
      <Image
        src={item.imagePath}
        alt={`Bild på ${item.product.title} - ${item.variant.name}`}
        width={64}
        height={64}
      />
      <div className="w-full flex flex-col pr-3">
        {/* Title and price sum */}
        <div className="w-full flex justify-between">
          <p>
            <span>{item.product.title}</span> - <span>{item.variant.name}</span>
          </p>
          <p className="whitespace-nowrap">{getLinePrice()} kr</p>
        </div>
        {/* Quantity, quantity controls and remove item */}
        <div className="w-full flex justify-between">
          <div className="flex gap-3 items-center text-center">
            <TinyButton
              src="/circle-minus-black.svg"
              onClick={handleDecreaseQuantity}
            />
            <span className="font-bold w-4">{item.quantity}</span>
            <TinyButton
              src="/circle-plus-black.svg"
              onClick={handleIncreaseQuantity}
            />
          </div>
          <TinyButton
            src="/circle-remove-black.svg"
            onClick={handleRemoveItem}
          />
        </div>
      </div>
    </li>
  );
};

export default ShoppingCartRow;
