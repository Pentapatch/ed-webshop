import Image from "next/image";

interface GraphicalInfoProps {}

const GraphicalInfo: React.FC<GraphicalInfoProps> = () => {
  return (
    <div className="flex justify-center my-16">
      <div className="flex flex-col md:flex-row mx-4 md:mx-0 gap-4 md:gap-16">
        <div className="flex gap-12 md:gap-0 items-center w-full md:w-40 md:text-center md:flex-col">
          <Image
            src="/3-blomman-svart-250.svg"
            alt="Så funkar det - blomma i vas"
            width={80}
            height={80}
          />
          <p className="md:mt-2">Mixa och matcha din bukett</p>
        </div>
        <div className="flex gap-12 md:gap-0 items-center w-full md:w-40 md:text-center md:flex-col">
          <Image
            src="/eco-friendly.svg"
            alt="Naturliga blommor utan färg och kemikalier"
            width={80}
            height={80}
          />
          <p className="md:mt-2">Naturliga blommor utan färg och kemikalier</p>
        </div>
        <div className="flex gap-12 md:gap-0 items-center w-full md:w-40 md:text-center md:flex-col">
          <Image
            src="/no-airplane-thin.svg"
            alt="Odlat i Europa. Ingen flygtransport"
            width={80}
            height={80}
          />
          <p className="md:mt-2">Odlat i Europa. Ingen flygtransport</p>
        </div>
      </div>
    </div>
  );
};

export default GraphicalInfo;
