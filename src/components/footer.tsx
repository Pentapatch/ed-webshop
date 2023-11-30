import Image from "next/image";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-button-green text-white h-[516px] flex items-center">
      <div className="flex justify-between px-32 w-full h-[360px]">
        <div>
          <Image
            src="/blombruket-logotype-symbol-beige.svg"
            width={192}
            height={300}
            alt="Blombrukets logotyp i symbolform"
          />
        </div>
        <div>
          <h6 className="text-xl uppercase">Information</h6>
          <p className="mt-6">
            <a href="#">Nyhetsbrev</a>
          </p>
          <p>
            <a href="#">Mina sidor</a>
          </p>
          <p>
            <a href="#">Frågor och svar</a>
          </p>
          <p>
            <a href="#">Våra villkor</a>
          </p>
          <p>
            <a href="#">Integritetspolicy</a>
          </p>
        </div>
        <div>
          <h6 className="text-xl uppercase">Kontakt</h6>
          <p className="mt-6">
            <a href="mailto:info@blombruket.se">info@blombruket.se</a>
          </p>
          <p>
            <a href="tel:010-122 12 30">010-122 12 30</a>
          </p>
          <p>Södra vägen 30</p>
          <p>392 45 Kalmar</p>
          <p>559217-9567</p>
          <p>VAT: SE559217956701</p>
        </div>
        <div className="">
          <div className="flex items-center">
            <h6 className="text-xl uppercase">Instagram</h6>
            <Image
              src="/instagram-logo-white.svg"
              width={32}
              height={32}
              alt="Instagrams logotyp"
              className="ml-3"
            />
            <div className="flex items-center">
              <h6 className="text-xl uppercase">Facebook</h6>
              <Image
                src="/facebook-logo-white.svg"
                width={32}
                height={32}
                alt="Facebooks logotyp"
                className="ml-3"
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
