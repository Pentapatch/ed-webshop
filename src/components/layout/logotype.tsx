import Image from "next/image";

interface LogotypeProps {
  src: string;
  alt: string;
}

const Logotype: React.FC<LogotypeProps> = ({ src, alt }) => {
  return (
    <div>
      <div className="hidden md:block">
        <Image src={src} width={200} height={50} alt={alt} className="ml-24" />
      </div>
      <div className="md:hidden">
        <Image src={src} width={120} height={30} alt={alt} />
      </div>
    </div>
  );
};

export default Logotype;
