import Image from "next/image";

interface FooterProps {
  containerWidth: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-button-green text-white h-[516px] flex items-center absolute w-full">
      <div className="flex justify-between px-56 w-full h-[360px] absolute">
        <Image
          src="/blombruket-logotype-symbol-beige.svg"
          width={192}
          height={300}
          alt="Blombrukets logotyp i symbolform"
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
        <div className="flex flex-col">
          <div className="flex items-center justify-end">
            <h6 className="text-xl uppercase">Instagram</h6>
            <Image
              src="/instagram-logo-white.svg"
              width={32}
              height={32}
              alt="Instagrams logotyp"
              className="ml-3"
            />
          </div>
          <div className="flex items-center justify-end mt-3">
            <h6 className="text-xl uppercase">Facebook</h6>
            <Image
              src="/facebook-logo-white.svg"
              width={32}
              height={32}
              alt="Facebooks logotyp"
              className="ml-3"
            />
          </div>
          <div className="flex items-center justify-end mt-5">
            <Image
              src="/eu-logo.svg"
              width={120}
              height={42}
              alt="Europeiska unionens logotyp"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full flex gap-6 justify-center top-32">
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
