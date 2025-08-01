import React,{useState} from "react"
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";
export function ProductDetail({product}){
  const [value,setvalue]=useState(0);
  function handelminus(){
    if(value>0){
      setvalue(value-1);
    }
  }
  function handelplus(){
    setvalue(value+1);
  }
  return(
    <>
        <div className="md:w-1/2 w-full h-auto flex flex-col justify-evenly pl-2">
          <div className="md:mt-0 mt-2">
            <h1 className="text-3xl">{product.name}</h1>
          </div>
          <div>
            <h3 className="text-[#303030a0] text-sm mr-6">
              {product.Discription}
            </h3>
          </div>
          <div className="flex mt-2.5">
            <p className="text-2xl">₹{product.price}</p>
            <p className="ml-2.5 text-[#303030a0] line-through">₹{product.oldprice}</p>
          </div>
          <div className="h-9 w-28 border border-black flex rounded-lg mt-4 md:mt-2">
              <div className="w-[33%] flex justify-center items-center cursor-pointer rounded-l-lg border-r border-black" onClick={handelplus}>
                <img src="https://img.icons8.com/?size=100&id=3220&format=png&color=000000" alt="" className="h-5" />
              </div>
              <div className="w-[33%] flex justify-center items-center">
                  <p>{value}</p>
              </div>
              <div className="w-[33%] flex justify-center items-center cursor-pointer rounded-r-lg border-l border-black" onClick={handelminus}>
                <img src="https://img.icons8.com/?size=100&id=85458&format=png&color=000000" alt="minus" className="h-5"/>
              </div>
          </div>
          <div className="w-full md:h-9 h-26  flex md:flex-row flex-col items-center md:mt-5 mt-8">
              <div className="md:w-[40%] w-[90%] md:h-full h-[40%]  flex justify-center items-center cursor-pointer border border-black rounded-lg">
                <p>Add to Cart</p>
                <HiShoppingCart className="h-6 w-6 cursor-pointer ml-3" />
              </div>
              <div className="md:w-[40%] w-[90%] h-[40%] md:mt-0 mt-[5%] md:h-full md:ml-6 flex justify-center items-center cursor-pointer bg-[#489fb5] rounded-lg">
                <p>Buy Now</p>
              </div>
          </div>
        </div>
    </>
  )
}