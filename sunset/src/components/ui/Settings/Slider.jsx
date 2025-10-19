// 通用滑桿元件
const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
  onStart,
  onEnd,
  className = "",
}) => {
   return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => {
        e.stopPropagation();
        onChange?.(e);
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        onStart?.();
      }}
      onPointerUp={(e) => {
        e.stopPropagation();
        onEnd?.();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        e.preventDefault(); // 防「ghost click」
        onStart?.();
      }}
      onTouchEnd={(e) => {
        e.stopPropagation();
        onEnd?.();
      }}
      className={`w-full accent-gray-900 cursor-pointer ${className}`}
    />
  );
};

export default Slider;