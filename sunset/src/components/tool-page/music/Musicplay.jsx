import { useState, useRef, useEffect } from "react";
import { Howl } from "howler";

const Musicbox = ({ songs = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  const currentSong = songs[currentIndex];

  // 🧠 播放邏輯獨立出來
  const loadAndPlay = (index) => {
    // 若已有播放中音樂 → 停止並卸載
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
    }

    // 建立新 Howl 實例
    const sound = new Howl({
      src: [songs[index].url],
      html5: true,
      volume: 0.6,
      onend: () => {
        // ✅ 歌曲播完後自動換下一首
        const next = (index + 1) % songs.length;
        setCurrentIndex(next);
      },
    });

    soundRef.current = sound;
    sound.play();
    setIsPlaying(true);
  };

  // 🎵 當 currentIndex 改變時，自動載入新曲目
  useEffect(() => {
    if (isPlaying) {
      loadAndPlay(currentIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const playSong = () => {
    if (!soundRef.current) {
      loadAndPlay(currentIndex);
    } else {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseSong = () => {
    if (soundRef.current) {
      soundRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  // 🚀 UI
  return (
    <section
      className="
        pointer-events-auto select-none absolute bottom-8 left-10
        w-80 h-20 rounded-xl border-2 bg-white/60 backdrop-blur-md shadow-md
        flex items-center px-2
      "
      role="region"
      aria-label="音樂播放器"
    >
      <div className="flex items-center gap-3 w-full px-3">
        {/* 封面 */}
        <div className="h-16 w-16 rounded-md overflow-hidden bg-amber-600 shrink-0">
          <img
            src={currentSong.coverUrl}
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* 標題與演出者 */}
        <div className="flex flex-col min-w-0 mr-2">
          <div className="text-black text-sm font-semibold truncate">
            {currentSong.title}
          </div>
          <div className="text-black/80 text-xs truncate">
            {currentSong.artist}
          </div>
        </div>

        {/* 控制鈕 */}
        <div className="ml-auto flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={prevSong}
            className="h-8 w-8 flex items-center justify-center rounded-md bg-black/5 hover:bg-black/10 active:bg-black/15 text-sm"
            aria-label="上一首"
          >
            ←
          </button>

          <button
            type="button"
            onClick={isPlaying ? pauseSong : playSong}
            className="h-10 w-10 flex items-center justify-center rounded-md bg-black/10 hover:bg-black/20 active:bg-black/30 font-semibold text-lg"
            aria-label="播放/暫停"
          >
            {isPlaying ? "❚❚" : "▷"}
          </button>

          <button
            type="button"
            onClick={nextSong}
            className="h-8 w-8 flex items-center justify-center rounded-md bg-black/5 hover:bg-black/10 active:bg-black/15 text-sm"
            aria-label="下一首"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Musicbox;
