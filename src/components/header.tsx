import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ActionIcon from "./actionIcon";
import ShoppingCartActionIcon from "./shoppingCartActionIcon";
import Logotype from "./logotype";

interface HeaderProps {
  numberOfItemsInCart?: number;
}

const Header: React.FC<HeaderProps> = ({ numberOfItemsInCart = 0 }) => {
  return (
    <header className="bg-white fixed top-0 w-full z-10 flex justify-center">
      <div className="w-full md:w-3/4">
        <div className="h-14 flex items-center md:h-20">
          <div className="flex justify-between w-full items-center">
            <ActionIcon
              smallIcon={<MenuIcon fontSize="medium" />}
              largeIcon={<MenuIcon fontSize="large" />}
              text="Meny"
              href="#"
              className="ml-2 md:ml-0"
            />
            <Logotype
              src="/blombruket-logo.svg"
              href="#"
              alt="Blombrukets logotyp"
            />
            <div className="flex gap-2 md:gap-5 items-center">
              <ActionIcon
                smallIcon={<PersonOutlineOutlinedIcon fontSize="medium" />}
                largeIcon={<PersonOutlineOutlinedIcon fontSize="large" />}
                text="Logga in"
                href="#"
              />
              <ShoppingCartActionIcon
                smallIcon={<ShoppingBagOutlinedIcon fontSize="medium" />}
                largeIcon={<ShoppingBagOutlinedIcon fontSize="large" />}
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
