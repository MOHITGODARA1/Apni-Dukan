import phoneicon from "../assets/phoneicon.png"
import Grosery from "../assets/grocery.png"
import electronics from "../assets/leptop2.png"
import khadbeej from "../assets/khadbeej.png"
import fastfood from "../assets/fastfood.png"
export function CetegeriesSection(){
    return(
        <>
          <div className="w-full h-28 flex justify-center items-center">
            <div className="w-[90%] flex shadow-lg h-full shadow-gray-200  mt-3 overflow-x-scroll no-scrollbar">
              <div className="h-full flex justify-center items-center flex-col w-50 flex-shrink-0">
                <a href="#" className="flex flex-col justify-center items-center">
                  <img src={phoneicon} alt="phoneicon" className="w-15 h-18"/>
                  <p>Phone</p>
                </a>
              </div>
              <div className="h-full flex justify-center items-center flex-col w-50 flex-shrink-0">
                <a href="#" className="flex flex-col justify-center items-center">
                  <img src={Grosery} alt="phoneicon" className="w-18 h-18"/>
                  <p>Grosery</p>
                </a>
              </div>
              <div className="h-full flex justify-center items-center flex-col w-50 flex-shrink-0">
                <a href="#" className="flex flex-col justify-center items-center">
                  <img src={electronics} alt="phoneicon" className="w-20 h-18"/>
                  <p>Electronics</p>
                </a>
              </div>
              <div className="h-full flex justify-center items-center flex-col w-50 flex-shrink-0">
                <a href="#" className="flex flex-col justify-center items-center">
                  <img src={khadbeej} alt="phoneicon" className="w-24 h-22"/>
                  <p>khad Beej</p>
                </a>
              </div>
              <div className="h-full flex justify-center items-center flex-col w-50 flex-shrink-0">
                <a href="#" className="flex flex-col justify-center items-center">
                  <img src={fastfood} alt="phoneicon" className="w-20 h-20"/>
                  <p>Fast Food</p>
                </a>
              </div>
            </div>
          </div>
        </>
    )
}