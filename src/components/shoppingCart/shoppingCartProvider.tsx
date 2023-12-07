import { FlowerProductDto } from "@/contracts/flowerProductDto";
import { ProductVariantDto } from "@/contracts/productVariantDto";
import { ShoppingCart } from "@/models/shoppingCart";
import { ShoppingCartEntry } from "@/models/shoppingCartEntry";
import React, { ReactNode, useState } from "react";
import {
  ShoppingCartContext,
  ShoppingCartContextProps,
} from "./shoppingCartContext";

interface ShoppingCartProviderProps {
  children: ReactNode;
  onSelectProduct: (productId: number, variantId: number | undefined) => void;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
  onSelectProduct,
}) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    items: [],
  });
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: FlowerProductDto, variant: ProductVariantDto) => {
    const existingItem = shoppingCart.items.find(
      (item) => item.product.id === product.id && item.variant.id === variant.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem: ShoppingCartEntry = {
        product: { id: product.id, title: product.title },
        variant: { id: variant.id, name: variant.name },
        imagePath: product.imagePath,
        pricePerUnit: variant.price,
        quantity: 1,
      };

      setShoppingCart((prevCart) => ({
        items: [...prevCart.items, newItem],
      }));
    }

    openPopup();
  };

  const increaseQuantity = (item: ShoppingCartEntry) => {
    item.quantity++;
    setShoppingCart((prevCart) => ({
      items: [...prevCart.items],
    }));
  };

  const decreaseQuantity = (item: ShoppingCartEntry) => {
    item.quantity--;

    if (item.quantity === 0) {
      removeItem(item);
    } else {
      setShoppingCart((prevCart) => ({
        items: [...prevCart.items],
      }));
    }
  };

  const removeItem = (item: ShoppingCartEntry) => {
    setShoppingCart((prevCart) => ({
      items: prevCart.items.filter((i) => i !== item),
    }));
  };

  const getCount = () => {
    return shoppingCart.items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const goToProductDetails = (item: ShoppingCartEntry) => {
    onSelectProduct(item.product.id, item.variant.id);
  };

  const contextValue: ShoppingCartContextProps = {
    shoppingCart: shoppingCart,
    isOpen: isOpen,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    getCount,
    openPopup,
    closePopup,
    goToProductDetails,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
