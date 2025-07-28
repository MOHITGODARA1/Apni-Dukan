import phone1 from "../../assets/phone1.jpg"
import phone2 from "../../assets/phone2.jpg"
import phone3 from "../../assets/phone3.jpg"
import phone4 from "../../assets/phone4.jpg"
import phone5 from "../../assets/phone5.jpg"
import phone6 from "../../assets/phone6.jpg"
import phone7 from "../../assets/phone7.jpg"
import phone8 from "../../assets/phone8.jpg"
import phone9 from "../../assets/phone9.jpg"
export function PhoneSection(){
  const items=[
    {id:1,name:"vivo x100",Image:phone1,price:"10000",oldprice:"12000"},
    {id:2,name:"realme 10",Image:phone2,price:"10000",oldprice:"12000"},
    {id:3,name:"realme 10 Pro",Image:phone3,price:"10000",oldprice:"12000"},
    {id:4,name:"realme 10 Pro",Image:phone4,price:"10000",oldprice:"12000"},
    {id:5,name:"realme 10 Pro",Image:phone5,price:"10000",oldprice:"12000"},
    {id:6,name:"realme 10 Pro",Image:phone6,price:"10000",oldprice:"12000"},
    {id:7,name:"realme 10 Pro",Image:phone7,price:"10000",oldprice:"12000"},
    {id:8,name:"iphone 15 pro",Image:phone8,price:"10000",oldprice:"12000"},
    {id:9,name:"iphone 16",Image:phone9,price:"10000",oldprice:"12000"},
  ]
    return(
        <>
          <div className="w-full flex justify-center items-center">
            <div className="w-[90%] flex flex-col gap-2 rounded-lg mt-4 bg-gray-100">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold ml-7 mt-2">Electronics Item</h1>
                <button className="bg-[#489fb5] text-white p-2 rounded-md m-2 flex items-center gap-1 w-15 flex-shrink-0 flex justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
              <div className="grid md:grid-cols-6  grid-cols-3 place-items-center">
                {
                  items.map((item)=>{
                    return(
                      <div className="h-40 mt-4 w-22 flex flex-col gap-2 rounded-lg cursor-pointer">
                        <div className="h-[60%] w-full">
                          <img src={item.Image} alt="not found" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-[40%] flex flex-col">
                          <p className="text-sm truncate font-light">{item.name}</p>
                          <p className="text-[12px] font-semibold">₹{item.price} <span className="text-gray-500 line-through ml-1">₹{item.oldprice}</span></p>
                          <p className="text-[14px] font-semibold text-green-700">Hot Deal</p>
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