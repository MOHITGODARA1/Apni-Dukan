import headphone1 from "../../assets/headphone1.jpg"
import phone1 from "../../assets/phone1.jpg"
import phone2 from "../../assets/phone2.jpg"
import headphone2 from "../../assets/headphone2.jpg"
export function TopRated(){
    const items=[
      {id:1,name:"headset",Image:headphone1,deal:"Explore Now"},
      {id:2,name:"phone",Image:phone1,deal:"Wishlist"},
      {id:3,name:"headset",Image:headphone2,deal:"Grab Now"},
      {id:4,name:"phone",Image:phone2,deal:"Big Saving"},
      {id:5,name:"headset",Image:headphone1,deal:"Popular"},
      {id:6,name:"phone",Image:phone1,deal:"Explore Now"}
    ]
    return(
        <>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="w-[90%] bg-[#EBD6FF] rounded-lg flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-2xl font-bold md:ml-7 ml-2 mt-2">Top Rated</h1>
                <button className="bg-black text-white p-2 rounded-md m-2 flex items-center gap-1 w-15 flex-shrink-0 justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
              <div className="grid md:grid-cols-5  grid-cols-2 place-items-center bg-white w-[90%] mt-2 rounded-lg mb-4">
                {
                  items.map((item)=>{
                    return(
                      <div className="h-50 mt-4 md:w-35 w-29 flex flex-col gap-2 rounded-lg cursor-pointer bg-gray-100" key={item.id}>
                        <div className="h-[70%] w-full">
                          <img src={item.Image} alt="not found" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-[30%] flex flex-col">
                          <p className="text-sm truncate font-light ml-2">{item.name}</p>
                          <p className="text-[18px] font-semibold ml-2">{item.deal}</p>
                        </div>  
                      </div>
                    )
                })
                }
              </div>
            </div>
          </div>
        </>
    )
}