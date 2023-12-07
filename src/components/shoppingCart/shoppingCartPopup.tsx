import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ActionButton from "../common/actionButton";
import ShoppingCartList from "./shoppingCartList";
import { useShoppingCart } from "./useShoppingCart";

interface ShoppingCartPopupProps {}

const ShoppingCartPopup: React.FC<ShoppingCartPopupProps> = () => {
  const { isOpen, closePopup } = useShoppingCart();

  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      closePopup();
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
          data-testid="shopping-cart-popup"
        >
          <div className="w-full p-6 relative bg-white shadow-2xl">
            {/* Close popup button */}
            <button
              className="absolute right-3 top-3"
              onClick={closePopup}
              data-testid="shopping-cart-close-button"
            >
              <Image
                src="/login-close.png"
                alt={`Grafik för att stänga varukorgen`}
                width={50}
                height={50}
              />
            </button>
            {/* Title */}
            <h6
              className="font-brandonGrotesque font-medium text-center uppercase text-lg mb-2"
              data-testid="title"
            >
              Min varukorg
            </h6>
            {/* List of shopping cart rows */}
            <ShoppingCartList />
            {/* Checkout button */}
            <div data-testid="shopping-cart-checkout-button">
              <ActionButton
                text="Till kassan"
                onClick={() => {}}
                className="w-full mt-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartPopup;
