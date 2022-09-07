import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CardProvider from "./store/CartProvider";
function App() {
   const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHandler = ()=>{
    setCartIsShown(true);
   }
   const hideCartHandler =()=>{
    setCartIsShown(false);
   }
  return (
    <CardProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals/>
     </main>
    </CardProvider>
  );
}

export default App;
