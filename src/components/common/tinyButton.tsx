import Image from "next/image";

interface TinyButtonProps {
  onClick: () => void;
  src: string;
  className?: string;
  testId?: string;
}

const TinyButton: React.FC<TinyButtonProps> = ({
  onClick,
  src,
  className = "",
  testId,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      data-testid={testId || undefined}
    >
      <Image src={src} alt="" width={14} height={14} />
    </button>
  );
};

export default TinyButton;
