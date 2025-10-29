const Musicbox = ({
  title = "MusicName",
  artist = "Artist",
  coverUrl = "",
}) => {
  return (
    <section
      className="
        pointer-events-auto select-none absolute bottom-8 left-10
        w-80 h-20 rounded-xl border-2 bg-white/60 backdrop-blur-md shadow-md
        flex items-center
        px-2        /* 整體內距 */
      "
      role="region"
      aria-label="音樂播放器"
    >

            <div className="flex items-center gap-3 w-full px-3">


  
      {/* 封面 */}
      <div
        className="h-16 w-16 rounded-md overflow-hidden bg-amber-600 shrink-0"
        aria-hidden="true"
      >
        {coverUrl ? (
          <img
            src={coverUrl}
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
        ) : null}
      </div>

      {/* 標題與演出者 */}
      <div className="flex flex-col min-w-0 mr-2">
        <div className="text-black text-sm font-semibold truncate">{title}</div>
        <div className="text-black/80 text-xs truncate">{artist}</div>
      </div>

      {/* 控制鈕群 */}
      <div className="ml-auto flex items-center gap-2 shrink-0">
        <button
          type="button"
          className="h-8 w-8 flex items-center justify-center rounded-md bg-black/5 hover:bg-black/10 active:bg-black/15 text-sm"
          aria-label="上一首"
        >
          ←
        </button>

        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center rounded-md bg-black/10 hover:bg-black/20 active:bg-black/30 font-semibold text-lg"
          aria-label="播放"
        >
          ▷
        </button>

        <button
          type="button"
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
