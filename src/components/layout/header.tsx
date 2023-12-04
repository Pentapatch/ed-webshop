import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ActionIcon from "../common/actionIcon";
import Logotype from "./logotype";
import ShoppingCartActionIcon from "../common/shoppingCartActionIcon";

interface HeaderProps {
  numberOfItemsInCart?: number;
  onGoBackToStore: () => void;
}

const Header: React.FC<HeaderProps> = ({
  numberOfItemsInCart = 0,
  onGoBackToStore,
}) => {
  return (
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
              <Logotype src="/blombruket-logo.svg" alt="Blombrukets logotyp" />
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
                href="#"
                numberOfItemsInCart={numberOfItemsInCart}
                className="mr-2 md:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
