import Image from "next/image";

interface TinyButtonProps {
  onClick: () => void;
  src: string;
}

const TinyButton: React.FC<TinyButtonProps> = ({ onClick, src }) => {
  return (
    <button onClick={onClick} className="">
      <Image src={src} alt="" width={14} height={14} />
    </button>
  );
};

export default TinyButton;
