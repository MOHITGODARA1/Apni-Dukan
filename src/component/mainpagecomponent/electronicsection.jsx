import headphone1 from "../../assets/headphone1.jpg"
import headphone2 from "../../assets/headphone2.jpg"
import headphone3 from "../../assets/headphone3.jpg"
import headphone4 from "../../assets/headphone4.jpg"
import headphone5 from "../../assets/headphone5.jpg"
import headphone6 from "../../assets/headphone6.jpg"
import headphone7 from "../../assets/headphone7.jpg"
import headphone8 from "../../assets/headphone8.jpg"
export function ElectronicSection(){
    const items=[
      {id:1,name:"realme Teach",Image:headphone1,price:"10000"},
      {id:2,name:"realme Teach",Image:headphone2,price:"10000"},
      {id:3,name:"realme Teach",Image:headphone3,price:"10000"},
      {id:4,name:"realme Teach",Image:headphone4,price:"10000"},
      {id:5,name:"realme Teach",Image:headphone5,price:"10000"},
      {id:6,name:"realme Teach",Image:headphone6,price:"10000"},
      {id:7,name:"realme Teach",Image:headphone7,price:"10000"},
      {id:8,name:"realme Teach",Image:headphone8,price:"10000"}
    ]
    return(
        <>
          <div className="w-full flex justify-center items-center">
            <div className="w-[90%] flex flex-col gap-2 rounded-lg mt-4">

              <h1 className="text-2xl font-bold ml-7 mt-2">Electronics Item</h1>
              <div className="grid md:grid-cols-6  grid-cols-3 place-items-center">
                {
                  items.map((item)=>{
                    return(
                      <div className="h-35 mt-4 w-22 flex flex-col gap-2 rounded-lg bg-[#FAFAFA] cursor-pointer">
                        <div className="h-[70%] w-full">
                          <img src={item.Image} alt="not found" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-[30%] flex flex-col">
                          <p className="text-sm truncate">{item.name}</p>
                          <p className="text-sm">₹{item.price}</p>
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