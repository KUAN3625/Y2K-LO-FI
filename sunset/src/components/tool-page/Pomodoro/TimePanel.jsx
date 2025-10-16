import Number from "./Number/auto Number"

const TimerPanel = () => {

    return (

        <>
            <section className=" absolute top-8 right-10 w-70 min-h-20 rounded-2xl p-5 border-2">
               <Number />

                <div className=" mt-4 flex justify-center">
<button className=" h-8 w-8 rounded-full " >⚪</button>{/*佔位 */}
                </div>

            </section>
        </>



    )

}

export default TimerPanel