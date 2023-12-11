import React from "react";
import ShoppingCartRow from "./shoppingCartRow";
import { useShoppingCart } from "./useShoppingCart";

interface ShoppingCartListProps {}

const ShoppingCartList: React.FC<ShoppingCartListProps> = () => {
  const { shoppingCart, getCount } = useShoppingCart();

  return (
    <div className="min-h-[120px] max-h-[400px] overflow-y-auto overflow-x-hidden">
      {/* List of products in the shopping cart */}
      <ul data-testid="shopping-cart-list">
        {getCount() > 0 &&
          shoppingCart.items.map((item, index) => (
            // Individual shopping cart row
            <ShoppingCartRow
              key={index}
              item={item}
              length={shoppingCart.items.length}
              index={index}
            />
          ))}
      </ul>
      {/* Empty cart message */}
      {getCount() === 0 && (
        <div className="flex items-center justify-center min-h-[120px] max-h-[400px]">
          <p className="font-thin text-center">Varukorgen är tom</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartList;
