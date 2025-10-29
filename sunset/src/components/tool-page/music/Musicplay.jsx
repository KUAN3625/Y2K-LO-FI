// Musicbox.jsx（第 1 步：參數化）
/**
 * @param {object} props
 * @param {string} props.title     音樂標題
 * @param {string} props.artist    演出者
 * @param {string} [props.coverUrl] 封面圖（可選）
 * @param {number} [props.progress] 0~1 的進度（可選）
 * @param {string} [props.className]  外層容器額外樣式（可選）
 */
const Musicbox = ({
  title = "MusicName",
  artist = "Artist",
  coverUrl = "",
  progress = 0,
  className = "",
}) => {
  const pct = Math.max(0, Math.min(1, progress)); // 夾住 0~1

  return (
    <section
      className={[
        "pointer-events-auto select-none absolute bottom-8 left-10",
        "w-80 h-20 rounded-xl border-2 p-3",
        "bg-white/60 backdrop-blur-md shadow-md",
        "flex flex-col justify-between",
        className,
      ].join(" ")}
      role="region"
      aria-label="音樂播放器"
    >


      <div className="flex items-center gap-3 min-w-0">
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

        <div className="flex flex-col min-w-0">
          <div className="text-black text-sm font-semibold truncate">{title}</div>
          <div className="text-black/80 text-xs truncate">{artist}</div>
        </div>
      </div>



      <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden" aria-hidden="true">
        <div
          className="h-full bg-gray-900"
          style={{ width: `${pct * 100}%` }}
        />
      </div>

      
    </section>
  );
};

export default Musicbox;
