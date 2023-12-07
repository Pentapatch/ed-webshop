interface ActionButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  text,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-brandonGrotesque font-medium bg-button-green hover:bg-button-green-hover text-white uppercase py-4 px-6 mt-[24px] ${className}`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
