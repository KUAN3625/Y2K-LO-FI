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

    // 開始
    start: () => {
      // 先清掉舊 interval（避免重複）
      const old = get().intervalId;
      if (old) clearInterval(old);

      const settings = usePomodoroSettings.getState();
      const focusSec = toSec(settings.focus.time);

      // 設定為 focus 並載入秒數
      set({ status: "focus", remainingSec: focusSec });

      const id = setInterval(() => {
        const { remainingSec, status } = get();

        if (remainingSec <= 1) {
          // focus → rest；rest → done
          if (status === "focus") {
            const restSec = toSec(usePomodoroSettings.getState().rest.time);
            set({ status: "rest", remainingSec: restSec });
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