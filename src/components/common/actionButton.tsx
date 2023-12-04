interface ActionButtonProps {
  onClick: () => void;
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, text }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-button-green text-white uppercase py-3 px-6 mt-[24px] mb-6"
      >
        {text}
      </button>
    </div>
  );
};

export default ActionButton;
