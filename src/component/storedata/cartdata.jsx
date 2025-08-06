import { useReducer,createContext,useContext } from "react";
const CartContext=createContext();
const iteminitalstate={
  item:[],
}
function cartReducer(state,action){
  switch(action.type){
    case "ADD_TO_CART":
      return{
        ...state,
        item:[...state.item,action.payload],
      };
    default:
      return state;
  }
}
export function CartProvider({children}){
  const  [state,dispatch]=useReducer(cartReducer,iteminitalstate);
  return(
    <CartContext.Provider value={{cart:state,dispatch}}>
      {children}
    </CartContext.Provider>
  )
}
export function UseCart(){
  return useContext(CartContext);
}