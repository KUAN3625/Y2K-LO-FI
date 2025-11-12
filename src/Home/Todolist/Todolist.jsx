import { useState, useEffect } from "react"
import SideMenu from "../../components/ui/Settings_UI/Side"
import { Note } from "../../components/ui/TodolistUI/Note/Note"

const Todolist = () => {
  // 🧩 初始化從 localStorage 讀取
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes")
    return saved ? JSON.parse(saved) : []
  })

  // 🎨 顏色
  const colors = ["#F9E79F", "#F5B7B1", "#AED6F1", "#A9DFBF"]
  const [colorIndex, setColorIndex] = useState(0)
  const activeColor = colors[colorIndex]

  // 🔁 notes 改變時自動儲存
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const updateNoteText = (id, newText) => {
  setNotes((prev) =>
    prev.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    )
  )
}

  const addNote = (x = 100, y = 100) => {
    const newNote = {
      id: Date.now(),
      text: "New Note",
      color: activeColor,
      x,
      y,
    }
    setNotes([...notes, newNote])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const updateNotePosition = (id, newX, newY) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, x: newX, y: newY } : note
      )
    )
  }

  const cycleColor = () => {
    setColorIndex((prev) => (prev + 1) % colors.length)
  }

  return (
    <div
      className="pointer-events-auto relative w-screen h-screen overflow-hidden"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const data = e.dataTransfer.getData("note")
        if (data) {
          const x = e.clientX - 100
          const y = e.clientY - 100
          addNote(x, y)
        }
      }}
    >
      {/* 左上選單 */}
      <div className="absolute top-4 left-4">
        <SideMenu />
      </div>

      {/* 拖曳生成區 */}
      <div
        draggable="true"
        onDragStart={(e) => e.dataTransfer.setData("note", "true")}
        className="pointer-events-auto absolute left-0 top-0 w-[100px] h-full bg-white/60 hover:bg-gray-50/30 cursor-grab active:cursor-grabbing"
      ></div>

      {/* 便條容器 */}
      {notes.map((note) => (
<Note
  key={note.id}
  text={note.text}
  onDelete={() => deleteNote(note.id)}
  color={note.color}
  x={note.x}
  y={note.y}
  onDragEnd={(x, y) => updateNotePosition(note.id, x, y)}
  onTextChange={(newText) => updateNoteText(note.id, newText)}
/>


      ))}

      {/* 右側按鈕群 */}
      <main className="pointer-events-auto absolute top-1/3 right-8 -translate-y-1/2 flex flex-col gap-6">
        <button className="w-12 h-12 rounded-full border bg-orange-100 text-white text-xl">
          🎯
        </button>

        <button
          className="w-12 h-12 rounded-full border text-white text-xl"
          style={{ backgroundColor: activeColor }}
          onClick={cycleColor}
        >
          🗒️
        </button>

        <button className="pointer-events-auto w-12 h-12 rounded-full border bg-orange-100 text-white text-xl">
          😊
        </button>
      </main>
    </div>
  )
}

export default Todolist
