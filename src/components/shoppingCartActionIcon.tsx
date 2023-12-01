interface ShoppingCartActionIconProps {
  largeIcon: React.ReactNode;
  smallIcon: React.ReactNode;
  text: string;
  href: string;
  numberOfItemsInCart?: number;
  className?: string;
}

const ShoppingCartActionIcon: React.FC<ShoppingCartActionIconProps> = ({
  largeIcon,
  smallIcon,
  text,
  href,
  numberOfItemsInCart = 0,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`flex flex-col items-center relative ${className}`}
    >
      <div className="absolute bg-light-green rounded-full w-4 h-4 md:w-6 md:h-6 flex justify-center items-center right-4 md:right-1">
        <p className="text-xs font-bold text-white">{numberOfItemsInCart}</p>
      </div>
      <div className="hidden md:block">{largeIcon}</div>
      <div className="block md:hidden">{smallIcon}</div>
      <p className="font-brandonGrotesque uppercase text-xs">{text}</p>
    </a>
  );
};

export default ShoppingCartActionIcon;
