import { ShoppingCart } from "@/models/shoppingCart";
import { ShoppingCartEntry } from "@/models/shoppingCartEntry";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ActionButton from "../common/actionButton";
import ShoppingCartList from "./shoppingCartList";

interface ShoppingCartPopupProps {
  cart: ShoppingCart;
  isOpen: boolean;
  onCloseShoppingCart: () => void;
  onIncreaseCartItemQuantity: (item: ShoppingCartEntry) => void;
  onDecreaseCartItemQuantity: (item: ShoppingCartEntry) => void;
  onRemoveCartItem: (item: ShoppingCartEntry) => void;
}

const ShoppingCartPopup: React.FC<ShoppingCartPopupProps> = ({
  cart,
  isOpen,
  onCloseShoppingCart,
  onDecreaseCartItemQuantity,
  onIncreaseCartItemQuantity,
  onRemoveCartItem,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      onCloseShoppingCart();
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div
          ref={popupRef}
          className="max-w-[512px] w-full flex items-center justify-center fixed z-20 top-12 md:top-20 px-2 md:px-0"
        >
          <div className="w-full p-6 relative bg-white shadow-2xl">
            {/* Close popup button */}
            <button
              className="absolute right-3 top-3"
              onClick={onCloseShoppingCart}
            >
              <Image
                src="/login-close.png"
                alt={`Grafik för att stänga varukorgen`}
                width={50}
                height={50}
              />
            </button>
            {/* Title */}
            <h6 className="text-center uppercase text-xl mb-2">Min varukorg</h6>
            {/* List of shopping cart rows */}
            <ShoppingCartList
              cart={cart}
              onDecreaseCartItemQuantity={onDecreaseCartItemQuantity}
              onIncreaseCartItemQuantity={onIncreaseCartItemQuantity}
              onRemoveCartItem={onRemoveCartItem}
            />
            {/* Checkout button */}
            <ActionButton
              text="Till kassan"
              onClick={() => {}}
              className="w-full mt-4"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartPopup;
