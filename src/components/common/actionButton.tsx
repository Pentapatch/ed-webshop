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
      className={`bg-button-green hover:bg-button-green-hover text-white uppercase py-3 px-6 mt-[24px] ${className}`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
