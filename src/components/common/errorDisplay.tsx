import ErrorIcon from "@mui/icons-material/Error";

interface ErrorDisplayProps {
  text: string;
  className?: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ text, className }) => {
  return (
    <div
      className={`flex items-center w-full font-brandonGrotesque bg-red-300 py-6 ${className}`}
      id="errorDisplay"
    >
      <ErrorIcon className="text-6xl mx-2" />
      <div className="w-full flex flex-col">
        {text.includes(":") ? (
          text.split(":").map((part, index, array) => (
            <h6
              key={index}
              className={
                index === 0 ? "font-bold uppercase" : "font-openSans text-sm"
              }
            >
              {part.trim()}
              {index !== 0 && index !== array.length - 1 && ":"}
            </h6>
          ))
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;
