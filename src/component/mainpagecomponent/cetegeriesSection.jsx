import phoneicon from "../../assets/phoneicon.png"
import Grosery from "../../assets/grocery.png"
import electronics from "../../assets/leptop2.png"
import khadbeej from "../../assets/khadbeej.png"
import fastfood from "../../assets/fastfood.png"

export function CategoriesSection(){
    const items=[
      {id:1,name:"Phone",image:phoneicon},
      {id:2,name:"Grosery",image:Grosery},
      {id:3,name:"Electronics",image:electronics},
      {id:4,name:"Khad Beej",image:khadbeej},
      {id:5,name:"Fast Food",image:fastfood},
    ]
    return(
        <>
          <div className="w-full h-28 flex justify-center items-center">
            <div className="w-[90%] flex shadow-lg h-full shadow-gray-200  mt-3 overflow-x-scroll no-scrollbar bg-[#FAFAFA] rounded-lg">
              {
                items.map((item)=>{
                  return(
                    <div className="h-full flex justify-center items-center flex-col w-50 flex-shrink-0" key={item.id}>
                      <a href="#" className="flex flex-col justify-center items-center">
                        <img src={item.image} alt="phoneicon" className="w-15 h-18"/>
                        <p>{item.name}</p>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </>
    )
}