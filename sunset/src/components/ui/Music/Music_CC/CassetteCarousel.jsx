import { useEffect, useRef, useState } from "react";

const CassetteCarousel = () => {
  const albums = [
    { id: "t1", title: "Sunset Memory" },
    { id: "t2", title: "Plastic Dreams" },
    { id: "t3", title: "Lo-Fi Window" },
    { id: "t4", title: "VHS Grain" },
    { id: "t5", title: "Neon Dust" },
    
  ];



  return (
    <div className="flex gap-10 p-4 items-end justify-center">
      {albums.map((a) => (
        <div
          key={a.id}
          className="w-[150px] h-[100px] bg-red-600 text-white overflow-hidden text-2xl rounded-lg  flex items-center justify-center"
        >
          {a.title}
        </div>
      ))}
    </div>
  );
};

export default CassetteCarousel;
