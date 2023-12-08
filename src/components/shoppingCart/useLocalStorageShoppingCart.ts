import { ShoppingCart } from "@/models/shoppingCart";
import { useEffect, useState } from "react";

export const useLocalStorageShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({ items: [] });

    useEffect(() => {
        const storedCart = localStorage.getItem("shoppingCart");
        if (storedCart) {
            setShoppingCart(JSON.parse(storedCart));
        }
    }, []);

    const updateShoppingCart = (
        updateFunction: (prevCart: ShoppingCart) => ShoppingCart = (prevCart) => ({
            items: [...prevCart.items],
        })
    ) => {
        setShoppingCart((prevCart) => {
            const newCart = updateFunction(prevCart);
            localStorage.setItem("shoppingCart", JSON.stringify(newCart));
            return newCart;
        });
    };

    return { shoppingCart, updateShoppingCart };
};