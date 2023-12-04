import Image from "next/image";
import Socials from "./socials";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-button-green text-white h-[400px] md:h-[516px] flex absolute w-full justify-center">
      <div className="w-full md:w-3/4 h-full flex items-center absolute">
        <div className="flex justify-evenly md:justify-between w-full h-[360px]">
          <Image
            src="/blombruket-logotype-symbol-beige.svg"
            width={192}
            height={300}
            alt="Blombrukets logotyp i symbolform"
            className="hidden md:block"
          />
          <div>
            <h6 className="text-xl uppercase mb-6">Information</h6>
            <a href="#" className="block">
              Nyhetsbrev
            </a>
            <a href="#" className="block">
              Mina sidor
            </a>
            <a href="#" className="block">
              Frågor och svar
            </a>
            <a href="#" className="block">
              Våra villkor
            </a>
            <a href="#" className="block">
              Integritetspolicy
            </a>
          </div>
          <div>
            <h6 className="text-xl uppercase">Kontakt</h6>
            <a href="mailto:info@blombruket.se" className="block mt-6">
              info@blombruket.se
            </a>
            <a href="tel:010-122 12 30" className="block">
              010-122 12 30
            </a>
            <p>Södra vägen 30</p>
            <p>392 45 Kalmar</p>
            <p>559217-9567</p>
            <p>VAT: SE559217956701</p>
          </div>
          {/* Sociala medier och eu */}
          <div className="hidden md:block flex-col">
            <Socials />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end md:hidden w-full z-10 mb-10 gap-10">
        <Socials />
      </div>
      {/* Betallösningar */}
      <div className="hidden md:flex relative h-24 gap-6 justify-center top-96">
        <Image
          src="/swish-logotype.svg"
          width={198}
          height={60}
          alt="Swish logotyp"
        />
        <Image
          src="/mastercard.svg"
          width={100}
          height={60}
          alt="Mastercards logotyp"
        />
        <Image src="/visa.svg" width={100} height={60} alt="Visas logotyp" />
        <Image
          src="/american-express.svg"
          width={100}
          height={60}
          alt="American Express logotyp"
        />
      </div>
    </footer>
  );
};

export default Footer;
