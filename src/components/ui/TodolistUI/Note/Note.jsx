import { useState } from "react"

export const Note = ({
  text,
  color = "#eee",
  onDelete,
  onDragEnd,
  onTextChange,
  x = 0,
  y = 0,
}) => {
  const [value, setValue] = useState(text)
  const [isEditing, setIsEditing] = useState(false)

  let startX = 0
  let startY = 0

  const handleMouseDown = (e) => {
    if (isEditing) return
    const note = e.currentTarget
    const rect = note.getBoundingClientRect()
    startX = e.clientX - rect.left
    startY = e.clientY - rect.top

    const handleMouseMove = (moveEvent) => {
      const newX = moveEvent.clientX - startX
      const newY = moveEvent.clientY - startY
      note.style.left = `${newX}px`
      note.style.top = `${newY}px`
    }

    const handleMouseUp = (upEvent) => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      const finalX = upEvent.clientX - startX
      const finalY = upEvent.clientY - startY
      onDragEnd(finalX, finalY)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    onTextChange(e.target.value)
  }

  const handleBlur = () => setIsEditing(false)
  const handleFocus = () => setIsEditing(true)

  return (
    <div
      className={`
        relative w-[clamp(140px,20vw,220px)] h-[clamp(120px,18vw,200px)]
        text-black text-[clamp(14px,1.5vw,18px)]
        p-[clamp(8px,1vw,12px)] rounded-lg shadow-md select-none
        ${isEditing ? "cursor-text" : "cursor-grab active:cursor-grabbing"}
      `}
      style={{
        backgroundColor: color,
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <textarea
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`
          w-full h-full resize-none bg-transparent outline-none leading-snug break-words
          ${isEditing ? "cursor-text" : "cursor-default"}
        `}
        readOnly={!isEditing} // 🚫 非編輯狀態禁止文字選取
      />

      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-lg text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  )
}
