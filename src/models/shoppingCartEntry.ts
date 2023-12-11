import { ShoppingCartProduct } from "./shoppingCartProduct";
import { shoppingCartProductVariant } from "./shoppingCartProductVariant";

export interface ShoppingCartEntry {
    product: ShoppingCartProduct,
    variant: shoppingCartProductVariant,
    imagePath: string,
    pricePerUnit: number
    quantity: number
}