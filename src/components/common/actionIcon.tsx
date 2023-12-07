import React from "react";

interface ActionIconProps {
  icon: React.ReactElement;
  text: string;
  href: string;
  className?: string;
}

const ActionIcon: React.FC<ActionIconProps> = ({
  text,
  icon,
  href,
  className = "",
}) => {
  return (
    <a href={href} className={`flex flex-col items-center ${className}`}>
      <div className="hidden md:block">
        {React.cloneElement(icon, { fontSize: "large" })}
      </div>
      <div className="block md:hidden">
        {React.cloneElement(icon, { fontSize: "medium" })}
      </div>
      <p className="hidden md:block font-brandonGrotesque uppercase text-2xs font-bold leading-snug">
        {text}
      </p>
    </a>
  );
};

export default ActionIcon;
