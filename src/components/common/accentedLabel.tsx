interface AccentedLabelProps {
  text: string;
}

const AccentedLabel: React.FC<AccentedLabelProps> = ({ text }) => {
  return (
    <div className="text-center uppercase py-2 my-4 w-full bg-accent-purple text-white font-light">
      <p>{text}</p>
    </div>
  );
};

export default AccentedLabel;
