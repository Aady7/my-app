import home from "./images/home.png"
const HomeContent= ()=>{
    return(
        <div className=" bg-green-200 lg:flex md:flex p-4 h-full pt-16  pl-20 pr-20 font-serif ">
        <div className="flex-col pb-16">
        <div className=" pb-10  font-extrabold   flex-col text-black text-7xl text-left w-full ">
        Show your creativity to the World..
       
      
        </div>
        <div className=" pt-2 pb-10     flex flex-col text-black text-md text-left w-1/2 ">
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam tempor orci eu lobortis. Risus viverra adipiscing at in tellus integer.
        </div>
        </div>
      

        
        <div className=" items-center justify-between w-full  ">
        <img
                    src={home}
                    height={800}
                    width={800}
                    alt="homeimage"
                />

        </div>

        </div>
    )
}
export default HomeContent