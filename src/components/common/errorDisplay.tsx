import ErrorIcon from "@mui/icons-material/Error";

interface ErrorDisplayProps {
  text: string;
  className?: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ text, className }) => {
  return (
    <div
      className={`flex md:block md:text-center items-center w-full font-brandonGrotesque font-bold uppercase bg-red-300 py-6 ${className}`}
    >
      <ErrorIcon className="text-6xl mx-2" />
      {text}
    </div>
  );
};

export default ErrorDisplay;
