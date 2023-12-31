import React from "react";
import { useShoppingCart } from "../shoppingCart/useShoppingCart";

interface ShoppingCartActionIconProps {
  icon: React.ReactElement;
  text: string;
  className?: string;
}

const ShoppingCartActionIcon: React.FC<ShoppingCartActionIconProps> = ({
  icon,
  text,
  className = "",
}) => {
  const { openPopup, getCount } = useShoppingCart();

  return (
    <button
      onClick={openPopup}
      className={`flex flex-col items-center relative ${className} mr-4 md:mr-0`}
      data-testid="shopping-cart-open-button"
    >
      <div className="absolute bg-light-green rounded-full w-4 h-4 md:w-6 md:h-6 flex justify-center items-center left-3 md:left-9">
        {/* Product count */}
        <p
          className="font-brandonGrotesque text-xs font-bold text-white"
          data-testid="shopping-cart-total-quantity"
        >
          {getCount()}
        </p>
      </div>
      {/* Large icon */}
      <div className="hidden md:block">
        {React.cloneElement(icon, { fontSize: "large" })}
      </div>
      {/* Medium icon */}
      <div className="block md:hidden">
        {React.cloneElement(icon, { fontSize: "medium" })}
      </div>
      {/* Icon text */}
      <p className="hidden md:block font-brandonGrotesque uppercase text-2xs font-bold leading-snug">
        {text}
      </p>
    </button>
  );
};

export default ShoppingCartActionIcon;
