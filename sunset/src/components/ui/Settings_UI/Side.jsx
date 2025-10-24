// src/components/ui/SideMenu.jsx
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useMenuStore } from "../../stoer/ui/useMenuStore";
import { Menu, X, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCameraStore from "../../stoer/usebr";
import { useSFXStore } from "../../stoer/useSFXStore";


const SideMenu = () => {
  const play = useSFXStore((state) => state.play )
  const { isOpen, toggle, close } = useMenuStore();
  const { switchTo } = useCameraStore()
  const navigate = useNavigate();

  const handleNavigate = (path, cam) => {
    navigate(path);
    switchTo(cam);
    setTimeout(() => close(), 100);
  };



  return (
    <>
      {/* 開關按鈕 */}
      {!isOpen && (
        <button
          onClick={() => {
                play("click");
                console.log("簡單的音效測試!");
                toggle();}}
          className="pointer-events-auto fixed top-5 left-5 z-[800] p-3 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/90 transition shadow-sm"
          title="開啟選單"
        >
          <Menu size={22} />
        </button>
      )}

      {/* 點擊空白關閉選單 */}
      {isOpen && (
        <div
          onClick={close}
          className="pointer-events-auto fixed inset-0 z-[9998] bg-black/0 "
        />
      )}


      {/* 側邊欄 */}
      <aside
        className={`pointer-events-auto fixed top-0 left-0 z-[9999] h-full w-72 bg-white/70 backdrop-blur-md shadow-md border-r border-white/50
        transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col justify-between h-full py-6">
          {/* 上半部 */}
          <nav className="flex flex-col gap-5">
            {[
              { name: "Home", path: "/core", cam: "core" },
              { name: "To-do-list", path: "/todo", cam: "twoScene" },
              { name: "About", path: "/about", cam: "menu" },
            ].map(({ name, path, cam }) => (
              <button
                key={name}
                onClick={() => handleNavigate(path, cam)} // ✅ 這裡執行跳轉
                className="text-left px-9 py-10 text-5xl font-medium tracking-wide leading-snug text-gray-800 hover:bg-white/90 transition"
              >
                {name}
              </button>
            ))}
          </nav>


          {/* 下半部 */}
          <div className="px-6 mt-auto flex justify-between items-center">
            {/* 左方大方塊預留 */}
            <div className="w-16 h-16 rounded-xl bg-white/60 shadow-inner" />

            {/* 右方兩顆圓形 */}
            <div className="flex gap-4">
              <button className="p-3 rounded-full bg-white/60 hover:bg-white/80 transition">
                <Settings size={20} />
              </button>
              <button className="p-3 rounded-full bg-white/60 hover:bg-white/80 transition">
                <LogOut size={20}
                  onClick={() => handleNavigate("/login", "login")} />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;