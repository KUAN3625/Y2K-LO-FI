// src/components/tool-page/music/CassetteCarousel.jsx
import { useEffect, useMemo, useRef, useState } from "react";
const CassetteCarousel = () => {
    const demoAlbums = [
        { id: "t1", title: "Sunset Memory" },
        { id: "t2", title: "Plastic Dreams" },
        { id: "t3", title: "Lo-Fi Window" },
        { id: "t4", title: "VHS Grain" },
        { id: "t5", title: "Neon Dust" },
    ];

    return (
        <div className=" w-full overflow-x-scroll overflow-y-hidden no-scrollbar border">
            <div className="flex gap-4 p-4">
                {albums.map((album) => (
                    <div
                        key={album.id}
                        className=" w-[150px] h-[150px] text-white text-2xl bg-amber-400 rounded-b-lg flex items-center justify-center"
                    >
                        {album.title}
                    </div>
                ))}
            </div>
        </div>


    )

};

export default CassetteCarousel;
