import React from "react";
import ShoppingCartRow from "./shoppingCartRow";
import { useShoppingCart } from "./useShoppingCart";

interface ShoppingCartListProps {}

const ShoppingCartList: React.FC<ShoppingCartListProps> = () => {
  const { shoppingCart, getCount } = useShoppingCart();

  return (
    <ul className="min-h-[120px] max-h-[400px] overflow-y-auto overflow-x-hidden">
      {(getCount() > 0 &&
        shoppingCart.items.map((item, index) => (
          // Individual shopping cart row
          <ShoppingCartRow
            key={index}
            item={item}
            length={shoppingCart.items.length}
            index={index}
          />
        ))) || (
        <li>
          {/* Empty cart message */}
          <p>Varukorgen är tom</p>
        </li>
      )}
    </ul>
  );
};

export default ShoppingCartList;
