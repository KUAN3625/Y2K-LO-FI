

const Entry = () => {

    return (


        <header className=" p-3 min-h-screen w-full  flex flex-col items-center justify-between    bg-red-200 " >
            {/* 紅色開發指示器，h-最小滿視窗 w-滿寬度 flex-垂直排列 items-center垂直置中  */}
            
            <div className="mt-10">
                <div className=" h-16 w-16 rounded-full border border-black  flex items-center justify-center">
                {/* 製作一個圓框 rounded-全面圓框  border 生成圓框  flex 將他視為彈性物件 後面兩個則是主軸與垂直置中*/}
                LOGO
                </div>
            </div>
            {/* 上方是LOGO元件*/}


           {/* 大標外框（你原本的格子） */}
<div className="w-full max-w-5xl border-2 border-black px-8">
  {/* 固定高度的內容區：只負責排版，不讓內容撐開外框 */}
  <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center">
    <img
      src="/Entry-LOGO.png"
      alt=""
      className="max-h-full max-w-full object-contain"
    />
  </div>
</div>


            <p>底部文字</p>
        </header>




    )

}

export default Entry