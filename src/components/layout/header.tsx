import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ActionIcon from "../common/actionIcon";
import Logotype from "./logotype";
import ShoppingCartActionIcon from "../common/shoppingCartActionIcon";
import { ShoppingCart } from "@/models/shoppingCart";
import ShoppingCartPopup from "../shoppingCart/shoppingCartPopup";
import { ShoppingCartEntry } from "@/models/shoppingCartEntry";

interface HeaderProps {
  numberOfItemsInCart?: number;
  shoppingCart: ShoppingCart;
  isShoppingCartOpen: boolean;
  onGoBackToStore: () => void;
  onOpenShoppingCart: () => void;
  onCloseShoppingCart: () => void;
  onIncreaseCartItemQuantity: (item: ShoppingCartEntry) => void;
  onDecreaseCartItemQuantity: (item: ShoppingCartEntry) => void;
  onRemoveCartItem: (item: ShoppingCartEntry) => void;
}

const Header: React.FC<HeaderProps> = ({
  numberOfItemsInCart = 0,
  shoppingCart,
  isShoppingCartOpen,
  onGoBackToStore,
  onOpenShoppingCart,
  onCloseShoppingCart,
  onDecreaseCartItemQuantity,
  onIncreaseCartItemQuantity,
  onRemoveCartItem,
}) => {
  return (
    <div>
      <header className="bg-white fixed top-0 w-full z-10 flex justify-center">
        <div className="w-full md:w-3/4">
          <div className="h-14 flex items-center md:h-20">
            <div className="flex justify-between w-full items-center">
              <ActionIcon
                icon={<MenuIcon />}
                text="Meny"
                href="#"
                className="ml-2 md:ml-0"
              />
              <a href="#" onClick={onGoBackToStore}>
                <Logotype
                  src="/blombruket-logo.svg"
                  alt="Blombrukets logotyp"
                />
              </a>
              <div className="flex gap-2 md:gap-5 items-center">
                <ActionIcon
                  icon={<PersonOutlineOutlinedIcon />}
                  text="Logga in"
                  href="#"
                />
                <ShoppingCartActionIcon
                  icon={<ShoppingBagOutlinedIcon />}
                  text="Varukorg"
                  numberOfItemsInCart={numberOfItemsInCart}
                  className="mr-2 md:mr-0"
                  onOpenShoppingCart={onOpenShoppingCart}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex justify-center relative">
        <div className="w-full md:w-3/4 flex justify-end">
          <ShoppingCartPopup
            cart={shoppingCart}
            isOpen={isShoppingCartOpen}
            onCloseShoppingCart={onCloseShoppingCart}
            onDecreaseCartItemQuantity={onDecreaseCartItemQuantity}
            onIncreaseCartItemQuantity={onIncreaseCartItemQuantity}
            onRemoveCartItem={onRemoveCartItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
