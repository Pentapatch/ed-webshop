interface ActionIconProps {
  largeIcon: React.ReactNode;
  smallIcon: React.ReactNode;
  text: string;
  href: string;
  className?: string;
}

const ActionIcon: React.FC<ActionIconProps> = ({
  largeIcon,
  smallIcon,
  text,
  href,
  className = "",
}) => {
  return (
    <a href={href} className={`flex flex-col items-center ${className}`}>
      <div className="hidden md:block">{largeIcon}</div>
      <div className="block md:hidden">{smallIcon}</div>
      <p className="font-brandonGrotesque uppercase text-xs">{text}</p>
    </a>
  );
};

export default ActionIcon;
