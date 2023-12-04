import { FlowerProductListDto } from "@/contracts/flowerProductListDto";

interface BuyButtonProps {
  product: FlowerProductListDto;
  onClick: (id: number) => void;
}

const BuyButton: React.FC<BuyButtonProps> = ({ product, onClick }) => {
  return (
    <div>
      <button
        onClick={() => onClick(product.id)}
        className="bg-button-green text-white uppercase py-3 px-6 mt-[24px] mb-6"
      >
        Beställ
      </button>
    </div>
  );
};

export default BuyButton;
