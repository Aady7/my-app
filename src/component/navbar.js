
const Navbar=()=>{
    return(
        
       <section className="">
        <nav className="bg-yellow-300 hover:shadow-xl py-8 static  ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <a href="#" className="text-blue-400  text-3xl lg:text-7xl md:text-3xl  font-bold md:ml-10 md:mr-10 mb-2 md:mb-0">
               CraftsON
              </a>
              <ul className="flex space-x-6 mb-4 md:mb-0">
                <li>
                  <a href="#" className="text-black font-semibold hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black font-semibold hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black font-semibold hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black font-semibold hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black font-semibold hover:underline">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </section>
    

    )

}
export default Navbar 