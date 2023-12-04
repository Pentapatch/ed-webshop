import Image from "next/image";

interface LogotypeProps {
  src: string;
  alt: string;
  href: string;
}

const Logotype: React.FC<LogotypeProps> = ({ src, href, alt }) => {
  return (
    <a href={href}>
      <div className="hidden md:block">
        <Image src={src} width={200} height={50} alt={alt} className="ml-24" />
      </div>
      <div className="md:hidden">
        <Image src={src} width={120} height={30} alt={alt} />
      </div>
    </a>
  );
};

export default Logotype;
