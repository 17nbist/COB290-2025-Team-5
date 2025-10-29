import Card from "@/components/Card";
export default function DashboardCard({ title, label, result, Icon }) {
    let gradientClass = "";
    //console.log(typeof(result));
    const resultNumb = parseInt(result);
    if (resultNumb >= 80) {
        gradientClass = "bg-gradient-to-r from-green-400 to-green-400";
    } else if (resultNumb >= 50) {
        gradientClass = "bg-gradient-to-r from-green-300 to-green-300";
    }
    console.log(gradientClass);
    return (
        <>
        <Card className={`h-full w-full overflow-hidden text-black ${gradientClass}`}>
            <div className="grid h-full w-full relative gap-4 grid-rows-[auto_auto]">
                <div className="grid grid-cols-[50%_50%]">
                    <div className="justify-self-start">
                        <p>{title}</p>
                    </div>
                    <div className="justify-self-end">
                        {Icon}                       
                    </div>
                </div>
                <div className="grid bottom-left" 
                style={{ lineHeight: "1", alignItems: "flex-start", bottom: "10px",
                 left: "15px", display: "flex", flexDirection: "column", 
                 gridTemplateRows: "auto auto", rowGap: "0px", marginTop: "18%", padding: "0" }}>
                    <span className={"font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none"}>{result}</span>
                    <span>{label}</span>
                </div>
            </div>
        </Card>
        </>
        /*
            <Card className={`h-full w-full overflow-hidden text-black ${gradientClass}`}>
                <div className="grid h-full w-full relative gap-4 grid-rows-[auto_auto] p-4 sm:p-6">

                    <div className="grid grid-cols-2">
                    <div className="justify-self-start text-sm sm:text-base md:text-lg font-semibold">
                        <p>{title}</p>
                    </div>
                    <div className="justify-self-end text-lg sm:text-xl md:text-2xl">
                        {Icon}
                    </div>
                    </div>


                    <div className="flex flex-col mt-auto space-y-1 sm:space-y-2">
                    <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none">
                        {result}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">{label}</span>
                    </div>
                </div>
            </Card>
            */
    )
}