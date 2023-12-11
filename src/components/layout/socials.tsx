import Image from "next/image";

interface SocialsProps {}

const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <>
      <div className="flex items-center justify-center md:justify-end">
        <h6 className="font-brandonGrotesque font-bold text-xl uppercase">
          Instagram
        </h6>
        <Image
          src="/instagram-logo-white.svg"
          width={32}
          height={32}
          alt="Instagrams logotyp"
          className="ml-3"
        />
      </div>
      <div className="flex items-center justify-center md:justify-end md:mt-3">
        <h6 className="font-brandonGrotesque font-bold text-xl uppercase">
          Facebook
        </h6>
        <Image
          src="/facebook-logo-white.svg"
          width={32}
          height={32}
          alt="Facebooks logotyp"
          className="ml-3"
        />
      </div>
      <div className="hidden md:flex items-center justify-center md:justify-end md:mt-5">
        <Image
          src="/eu-logo.svg"
          width={120}
          height={42}
          alt="Europeiska unionens logotyp"
        />
      </div>
    </>
  );
};

export default Socials;
