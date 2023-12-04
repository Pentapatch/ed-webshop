interface AccentProps {
  text: string;
}

const Accent: React.FC<AccentProps> = ({ text }) => {
  return (
    <div className="text-center uppercase py-2 my-4 w-full bg-accent-purple text-white">
      <p>{text}</p>
    </div>
  );
};

export default Accent;
