import { FlowerProductListDto } from "@/contracts/flowerProductListDto";

interface BuyButtonProps {
  product: FlowerProductListDto;
}

const BuyButton: React.FC<BuyButtonProps> = ({ product }) => {
  return (
    <div>
      <button className="bg-button-green text-white uppercase py-[20px] mt-[24px] lg:mt-[26px] px-[36px] lg:px-[24px] mb-6">
        Beställ
      </button>
    </div>
  );
};

export default BuyButton;
