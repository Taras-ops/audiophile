import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Category, Home, Product, Checkout, NotFound } from "./pages";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/productSlice";
import { HeaderContext } from "./context";
import Overlay from "./components/Overlay";

function App() {
  const [overlay, setOverlay] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  const changeOverlay = () => {
    setOverlay(prev => !prev)
    const body = document.querySelector('body')
    body.classList.toggle('overflow')
  }

  const contextValue = {
    overlay: overlay,
    changeOverlay: changeOverlay
  }


  return (
    <>
      <HeaderContext.Provider value={contextValue}>
        {overlay && <Overlay/>}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/:category" element={<Category/>}/>
          <Route path="/product/:slug" element={<Product/>}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </HeaderContext.Provider>
    </>
  );
}

export default App;
