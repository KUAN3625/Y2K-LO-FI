import { useState, useRef, useEffect } from "react";
import useCameraStore from "../../../stoer/usebr";

const CassetteCarousel = () => {
  const albums = [
    { id: "t1", title: "Sunset Memory", cma:"core" },
    { id: "t2", title: "Plastic Dreams", cma:"twoScene" },
    { id: "t3", title: "Lo-Fi Window", cma:"threeScene" },
    { id: "t4", title: "VHS Grain", cma:"threeScene" },
    { id: "t5", title: "Neon Dust", cma:"threeScene" },
  ];


  const switchTo = useCameraStore((state) => state.switchTo);

  const [showAlbums, setShowAlbums] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowAlbums(false);
      }
    };
    if (showAlbums) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAlbums]);

  return (
    <>
      {/* 展開按鈕：靠左、往上調一點 */}
      {!showAlbums && (
<button
  onClick={() => setShowAlbums(true)}
  className="fixed left-1 top-[42%] -translate-y-1/2 z-[99999]
             border-white/40 text-white/70 rounded-md border-2
             w-[40px] h-[100px] flex items-center justify-center text-2xl
             bg-white/5 backdrop-blur-md
             opacity-40 hover:opacity-100 hover:bg-white/20 hover:text-amber-900
             transition-all duration-300"
  title="展開專輯"
>
  →
</button>

      )}

      {/* 專輯列：用同一個垂直錨點，與按鈕同高度 */}
      {showAlbums && (
        <div
          ref={containerRef}
          className="fixed top-[42%] -translate-y-1/2 left-1/2 -translate-x-1/2 z-[99998]
                      rounded-2xl px-5 pt-5 pb-8 bg-white/5"
        >
          <div className="flex flex-col gap-4 p-5">
            <div className="flex gap-10 items-center justify-center">
              {albums.map((a) => (
                <div
                  key={a.id}
                  onClick={() => {
                    switchTo(a.cma);
                    setShowAlbums(false)}}
                  className="w-[150px] h-[100px] bg-white/10 text-white text-2xl
                             rounded-lg border-2 flex items-center justify-center cursor-pointer transition
                             hover:bg-white/50 hover:text-black "
                >
                  {a.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CassetteCarousel;
