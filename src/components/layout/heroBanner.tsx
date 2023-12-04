import Link from "next/link";
import React from "react";

interface HeroBannerProps {
  title: string;
  message: string[];
  buttonText?: string | undefined;
  href?: string | undefined;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  buttonText,
  title,
  message,
  href = "#",
}) => {
  const backgroundImageUrl = "/miljobild-torkad-bukett-julros-1560-2.jpg.webp";

  return (
    <div
      className="w-full h-[100vh] flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-ivypresto text-3xl md:text-7xl font-bold">{title}</h1>
      <div className="my-3 md:text-lg text-center">
        {message.map((paragraph, index) => (
          <p key={index} className="">
            {paragraph}
          </p>
        ))}
      </div>
      {buttonText && (
        <Link href={href}>
          <button className="py-4 px-8 mt-6 uppercase bg-white text-black">
            {buttonText}
          </button>
        </Link>
      )}
    </div>
  );
};

export default HeroBanner;
