import React from "react";

function HeroImg({ imageSrc }) {
  return (
    <div className="flex flex-col flex-1 shrink my-auto basis-24 min-h-[640px] min-w-[240px] max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt="Illustration representing software changing the world"
        className="object-contain flex-1 w-full aspect-[1.02] max-md:max-w-full"
      />
    </div>
  );
}

export default HeroImg;
