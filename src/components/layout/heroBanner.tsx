import Link from "next/link";
import React from "react";

interface HeroBannerProps {
  title: string;
  message: string[];
  buttonText?: string | undefined;
  targetId?: string | undefined;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  buttonText,
  title,
  message,
  targetId,
}) => {
  const backgroundImageUrl = "/miljobild-torkad-bukett-julros-1560-2.jpg.webp";

  const scrollToTarget = () => {
    if (!targetId) return;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full h-[100vh] flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-ivypresto text-3xl md:text-7xl font-semibold">
        {title}
      </h1>
      <div className="my-3 md:text-xl text-center">
        {message.map((paragraph, index) => (
          <p key={index} className="">
            <strong>{paragraph}</strong>
          </p>
        ))}
      </div>
      {buttonText && (
        <button
          onClick={scrollToTarget}
          className="py-4 px-8 mt-6 uppercase bg-white text-black font-brandonGrotesque font-medium"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default HeroBanner;
