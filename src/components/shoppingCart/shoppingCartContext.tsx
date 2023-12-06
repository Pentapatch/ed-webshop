import { FlowerProductDto } from "@/contracts/flowerProductDto";
import { ProductVariantDto } from "@/contracts/productVariantDto";
import { ShoppingCart } from "@/models/shoppingCart";
import { ShoppingCartEntry } from "@/models/shoppingCartEntry";
import { createContext } from "react";

export interface ShoppingCartContextProps {
  shoppingCart: ShoppingCart;
  isOpen: boolean;
  addItem: (product: FlowerProductDto, variant: ProductVariantDto) => void;
  increaseQuantity: (item: ShoppingCartEntry) => void;
  decreaseQuantity: (item: ShoppingCartEntry) => void;
  removeItem: (item: ShoppingCartEntry) => void;
  getCount: () => number;
  openPopup: () => void;
  closePopup: () => void;
}

export const ShoppingCartContext = createContext<
  ShoppingCartContextProps | undefined
>(undefined);
