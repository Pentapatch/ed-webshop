import { ShoppingCart } from "@/models/shoppingCart";
import { ShoppingCartEntry } from "@/models/shoppingCartEntry";
import Image from "next/image";
import React from "react";
import TinyButton from "../common/tinyButton";
import ActionButton from "../common/actionButton";

interface ShoppingCartPopupProps {
  cart: ShoppingCart;
}

const ShoppingCartPopup: React.FC<ShoppingCartPopupProps> = ({ cart }) => {
  const getLinePrice = (item: ShoppingCartEntry) => {
    return item.pricePerUnit * item.quantity;
  };

  return (
    <div className="inset-0 flex items-center justify-center">
      <div className="w-[512px] p-6 relative bg-white shadow-2xl">
        <button className="absolute right-3 top-3">
          <Image
            src="/login-close.png"
            alt={`Grafik för att stänga varukorgen`}
            width={50}
            height={50}
          />
        </button>
        <h6 className="text-center uppercase text-xl mb-2">Min varukorg</h6>
        <ul className="min-h-[120px] max-h-[370px] overflow-y-auto overflow-x-hidden">
          {cart.items.length > 0 &&
            cart.items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center"
                style={{
                  borderBottom:
                    index < cart.items.length - 1
                      ? "2px solid #f9f4e8"
                      : "none",
                }}
              >
                <Image
                  src={item.imagePath}
                  alt={`Bild på ${item.product.title}`}
                  width={64}
                  height={64}
                />
                <div className="flex flex-col ml-2 w-full">
                  <p>
                    <span>{item.product.title}</span> -{" "}
                    <span>{item.variant.name}</span>
                  </p>
                  <div className="flex gap-3 items-center text-center">
                    <TinyButton
                      src="/circle-minus-black.svg"
                      onClick={() => {}}
                    />
                    <span className="font-bold">{item.quantity}</span>
                    <TinyButton
                      src="/circle-plus-black.svg"
                      onClick={() => {}}
                    />
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <p className="whitespace-nowrap">{getLinePrice(item)} kr</p>
                  <TinyButton
                    src="/circle-remove-black.svg"
                    onClick={() => {}}
                  />
                </div>
              </li>
            ))}
        </ul>
        <ActionButton
          text="Till kassan"
          onClick={() => {}}
          className="w-full mt-4"
        />
      </div>
    </div>
  );
};

export default ShoppingCartPopup;
