import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ActionIcon from "../common/actionIcon";
import ShoppingCartActionIcon from "../common/shoppingCartActionIcon";
import ShoppingCartPopup from "../shoppingCart/shoppingCartPopup";
import Logotype from "./logotype";

interface HeaderProps {
  onGoBackToStore: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoBackToStore }) => {
  return (
    <>
      <header className="bg-white fixed top-0 w-full z-10 flex justify-center">
        <div className="w-full md:w-3/4">
          <div className="h-14 flex items-center md:h-20">
            <div className="flex justify-between w-full items-center">
              {/* Hamburger menu */}
              <ActionIcon
                icon={<MenuIcon />}
                text="Meny"
                href="#"
                className="ml-2 md:ml-0"
              />
              <a href="#" onClick={onGoBackToStore}>
                {/* Logotype */}
                <Logotype
                  src="/blombruket-logo.svg"
                  alt="Blombrukets logotyp"
                />
              </a>
              <div className="flex gap-2 md:gap-5 items-center">
                {/* Log in icon */}
                <ActionIcon
                  icon={<PersonOutlineOutlinedIcon />}
                  text="Logga in"
                  href="#"
                />
                {/* Shopping cart icon */}
                <ShoppingCartActionIcon
                  icon={<ShoppingBagOutlinedIcon />}
                  text="Varukorg"
                  className="mr-2 md:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Shopping cart popup */}
      <div className="flex justify-center relative">
        <div className="w-full md:w-3/4 flex justify-end">
          <ShoppingCartPopup />
        </div>
      </div>
    </>
  );
};

export default Header;
