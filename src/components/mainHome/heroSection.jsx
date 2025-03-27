import Image from "next/image";


const HeroSection=()=>{
    return(
        <div style={{
            backgroundImage:`url("heroBg.png")`, 
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center"
            }} 
            className="w-full h-screen bg-[#f3f3f3] pt-[70px] flex ">
                <div className="flex flex-col gap-2 py-[30px] items-center w-[50%]">
                    <input className="w-[450px] h-[38px] border-[2px] border-[#000000] rounded-[100px] px-[18px] text-[#000000]" type="text" placeholder="🔍 Search " />
                    <h1 style={{ fontFamily: '"Ink Free", cursive' }} className="text-[100px] text-[#000000] font-[500] text-gray-700 text-center">Let’s Explore <span className="text-[#2C656E]">Wonderfuls</span> of TravelPro...</h1>
                </div>
                <div className="flex flex-col gap-2 items-center w-[50%] py-[30px]">
                    <img src="https://placehold.co/650x280" />
                    <div className="flex gap-2">
                        <img src="https://placehold.co/320x280" />
                        <img src="https://placehold.co/320x280" />
                    </div>
                </div>
            
        </div>
    )
}

export default HeroSection;