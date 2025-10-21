這裡說明Ｓｔｏｅｒ


Ｔ 是測試用元件，不需要管理
如果有測試需求可以在上面處裡

ｕｓｅｂｒ是Ｒ３Ｆ攝影機邏輯

ｕｓｅｐｏｍｏｄｒｏＳｅｔｔｉｎｇｓ　是負責番茄鐘滑稈，可以用在整個網域


usePomodoroTimer　是番茄鐘的核心層，所有番茄鐘的邏輯集中地
裡面放了基礎的  idle | focus | rest | paused | done 狀態

以及一顆onComplete的事件回呼，在所有迴圈結束後執行的小函式
用在處理超出時長的物件

✅ 使用方式（任何組件都可以註冊）
export const PetSpawner = () => {
  const { addOnComplete } = usePomodoroTimer();


  useEffect(() => {
    addOnComplete(() => {
     執行動作

    });
  }, []);
};

就像是上面這樣