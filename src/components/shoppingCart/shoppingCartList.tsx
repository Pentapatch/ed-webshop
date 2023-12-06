import { ShoppingCart } from "@/models/shoppingCart";
import { ShoppingCartEntry } from "@/models/shoppingCartEntry";
import React from "react";
import ShoppingCartRow from "./shoppingCartRow";

interface ShoppingCartListProps {
  cart: ShoppingCart;
  onIncreaseCartItemQuantity: (item: ShoppingCartEntry) => void;
  onDecreaseCartItemQuantity: (item: ShoppingCartEntry) => void;
  onRemoveCartItem: (item: ShoppingCartEntry) => void;
}

const ShoppingCartList: React.FC<ShoppingCartListProps> = ({
  cart,
  onDecreaseCartItemQuantity,
  onIncreaseCartItemQuantity,
  onRemoveCartItem,
}) => (
  <ul className="min-h-[120px] max-h-[400px] overflow-y-auto overflow-x-hidden">
    {(cart.items.length > 0 &&
      cart.items.map((item, index) => (
        <ShoppingCartRow
          key={index}
          item={item}
          length={cart.items.length}
          index={index}
          onDecreaseCartItemQuantity={onDecreaseCartItemQuantity}
          onIncreaseCartItemQuantity={onIncreaseCartItemQuantity}
          onRemoveCartItem={onRemoveCartItem}
        />
      ))) || (
      <li>
        <p>Varukorgen är tom</p>
      </li>
    )}
  </ul>
);

export default ShoppingCartList;
