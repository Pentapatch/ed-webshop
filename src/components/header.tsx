import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

interface HeaderProps {
  numberOfItemsInCart?: number;
}

const Header: React.FC<HeaderProps> = ({ numberOfItemsInCart = 0 }) => {
  return (
    <header>
      <div className="bg-white h-20 flex items-center">
        <div className="flex justify-between px-32 w-full items-center">
          <div className="flex flex-col items-center">
            <MenuIcon fontSize="large" />
            <p className="font-brandonGrotesque uppercase text-xs">Meny</p>
          </div>
          <div>
            <Image
              src="/blombruket-logo.svg"
              width={200}
              height={50}
              alt="Blombrukets logotyp"
            />
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <PersonOutlineOutlinedIcon fontSize="large" />
              <p className="font-brandonGrotesque uppercase text-xs">
                Logga in
              </p>
            </div>
            <div className="flex flex-col items-center relative">
              <div className="absolute bg-light-green rounded-full w-6 h-6 flex justify-center items-center right-1">
                <p className="text-xs font-bold text-white">
                  {numberOfItemsInCart}
                </p>
              </div>
              <ShoppingBagOutlinedIcon fontSize="large" />
              <p className="font-brandonGrotesque uppercase text-xs">
                Varukorg
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
