import { useContext } from "react";
import { ShoppingCartContext, ShoppingCartContextProps } from "./shoppingCartContext";

export const useShoppingCart = (): ShoppingCartContextProps => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error(
            "useShoppingCart must be used within a ShoppingCartProvider"
        );
    }
    return context;
};