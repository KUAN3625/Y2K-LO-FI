
const Entry = () => {

    return (

        <header className=" pb-2 min-h-screen w-full  flex flex-col items-center justify-between bg-black">
            {/* LOGO 區塊 */}
            <div className=" mt-1">
                <div className="h-20 w-20 text-white  rounded-full border border-white flex items-center justify-center text-xl font-bold">
                    LOGO
                </div>
            </div>
            {/* 上方是LOGO元件 */}

            {/* 大標外框 */}
            <div className="w-full max-w-2xl border-1  px-4">
                {/* 固定高度的內容區 */}
                <div className="h-48 sm:h-56 md:h-64 flex items-center justify-center">
    <video
      src=" /LOGO.mp4 " 
      autoPlay
      loop
      muted
      playsInline
      className="max-h-full max-w-full object-contain"
    />
                </div>
            </div>


            <div className=" flex  mb-8">
            <p className="text-red-50 font-mono animate-pulse">Loading...</p>

            </div>


        </header>

    )

}

export default Entry