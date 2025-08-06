import { ItemAdd } from "../component/cartsection/itemadd";
import { CartSuggestion } from "../component/cartsection/cartsuggestion";
import { Footer } from "../component/mainpagecomponent/footer";
export function CartPage(){
  return(
    <>
      <ItemAdd />
      <CartSuggestion />
      <Footer />
    </>
  )
}