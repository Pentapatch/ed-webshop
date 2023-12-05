import React from "react";

interface ShoppingCartActionIconProps {
  icon: React.ReactElement;
  text: string;
  onOpenShoppingCart: () => void;
  numberOfItemsInCart?: number;
  className?: string;
}

const ShoppingCartActionIcon: React.FC<ShoppingCartActionIconProps> = ({
  icon,
  text,
  numberOfItemsInCart = 0,
  className = "",
  onOpenShoppingCart,
}) => {
  return (
    <button
      onClick={onOpenShoppingCart}
      className={`flex flex-col items-center relative ${className} mr-4 md:mr-0`}
    >
      <div className="absolute bg-light-green rounded-full w-4 h-4 md:w-6 md:h-6 flex justify-center items-center left-3 md:left-9">
        <p className="text-xs font-bold text-white">{numberOfItemsInCart}</p>
      </div>
      <div className="hidden md:block">
        {React.cloneElement(icon, { fontSize: "large" })}
      </div>
      <div className="block md:hidden">
        {React.cloneElement(icon, { fontSize: "medium" })}
      </div>
      <p className="hidden md:block font-brandonGrotesque uppercase text-xs">
        {text}
      </p>
    </button>
  );
};

export default ShoppingCartActionIcon;
