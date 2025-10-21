import { useState, useEffect } from "react"
import { usePomodoroSettings } from "./usePomodoroSettings"
import { create } from "zustand"

    //番茄鐘運作核心

export const usePomodoroTimer = create((set, get) => {
  const toSec = (m) => Math.max(1, Math.round(m * 60)); // 至少 1 秒，避免 0 → 00:00



  return {
    // 狀態
    status: "idle",              // idle | focus | rest | paused | done
    remainingSec: 0,
    intervalId: null,
    cycles: 0,
    maxCycles: 4,


    // 開始
    start: () => {
      // 先清掉舊 interval（避免重複）
      const old = get().intervalId;
      if (old) clearInterval(old);

const { status, remainingSec } = get();
  const settings = usePomodoroSettings.getState();

let initialSec = 0;
  let initialStatus = status;

  if (status === "paused" && remainingSec > 0) {
    // → 從暫停恢復
    initialSec = remainingSec;
    // 恢復成暫停前的模式（focus/rest）
    initialStatus = get().previousStatus || "focus";
  } else {
    // → 全新開始
    initialStatus = "focus";
    initialSec = toSec(settings.focus.time);
  }

  // 更新狀態
  set({
    status: initialStatus,
    remainingSec: initialSec,
    previousStatus: initialStatus, // ← 新增：記錄當前模式
  });

  const id = setInterval(() => {
    const { remainingSec, status } = get();

    if (remainingSec <= 1) {
      // focus → rest；rest → done
      if (status === "focus") {
        const restSec = toSec(usePomodoroSettings.getState().rest.time);
        set({ status: "rest", remainingSec: restSec, previousStatus: "rest" });
      } else if (status === "rest") {
        clearInterval(get().intervalId);
        set({ status: "done", remainingSec: 0, intervalId: null });
        return;
      }
    } else {
      set({ remainingSec: remainingSec - 1 });
    }
  }, 1000);

  set({ intervalId: id });
},

    // 暫停
    pause: () => {
      const id = get().intervalId;
      if (id) clearInterval(id);
      set({ intervalId: null, status: "paused" });
    },

    // 重設
    reset: () => {
      const id = get().intervalId;
      if (id) clearInterval(id);
      set({ intervalId: null, remainingSec: 0, status: "idle" });
    },
  };
});