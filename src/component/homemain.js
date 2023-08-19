import mainhome from "./images/mainhome.jpg" 
const HomeMain=()=>{
    return(
        <section>
        <div className="bg-white pt-16 pb-16 text-black   flex flex-col justify-center items-center ">
        <div className=" justify-center text-center text-xl pt-16 font-semibold">
        At tellus at urna condimentum mattis pellentesqu
    
        </div>
        <div className="justify-center text-center text-5xl pt-5 pb-10 font-bold">
        Cras tincidunt lobortis feugiat 
        </div>
        
    
        </div>
        <center>
       <div className=" relative z-0  lg:bg-orange-50  md:bg-orange-50 rounded-md shadow-xl text-center hover:shadow-lg items-center justify-center text-2xl w-3/4  h-96 mb-28">
    <div className="absolute z-10  justify-center bg-white rounded-md h-80 w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-2 ">
    <img className="transform translate-x-16 translate-y-16 items-center justify-center mb-2 hover:shadow-lg"
    src={mainhome} 
        height={200}
        width={200}
        
    />
    </div>
   

</div>
       
       </center>
        </section>
    );
   

}
export default HomeMain