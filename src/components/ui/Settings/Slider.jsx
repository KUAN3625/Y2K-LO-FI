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
        e.stopPropagation()
        onChange?.(e)
      }}
      onPointerDown={(e) => {
        e.stopPropagation()
        onStart?.()
      }}
      onPointerUp={(e) => {
        e.stopPropagation()
        onEnd?.()
      }}
      onTouchStart={(e) => {
        e.stopPropagation()
        e.preventDefault()
        onStart?.()
      }}
      onTouchEnd={(e) => {
        e.stopPropagation()
        onEnd?.()
      }}
      className={`
        w-full cursor-pointer appearance-none bg-black h-2 rounded-lg
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-6
        [&::-webkit-slider-thumb]:w-6
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:border
        [&::-webkit-slider-thumb]:shadow
        [&::-moz-range-thumb]:h-6
        [&::-moz-range-thumb]:w-6
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-white
        [&::-moz-range-thumb]:border
        [&::-moz-range-thumb]:shadow
        focus:outline-none
        ${className}
      `}
    />
  )
}

export default Slider