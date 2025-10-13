const Musicbox = () => {

    return(
        <section className=" absolute bottom-8 left-10 w-80 h-20 rounded-xl border-2 p-3 flex flex-col justify-between
        bg-white/60 backdrop-blur-sm shadow-sm ">
        <div className=" flex items-center gap-3">
        <div className=" h-15 w-15 bg-amber-600 rounded-md" />{/*封面 */}

        <div className=" flex flex-col-reverse">
        <div className=" text-black font-medium text-10">MusicName</div>
        <div className=" text-black font-medium text-sm">Name</div>
        </div>


        </div>
        <div className="h-1 pt-1 bg-gray-900 rounded-full " />

        </section>



    )
}

export default Musicbox