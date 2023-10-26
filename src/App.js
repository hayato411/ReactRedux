import { useEffect } from "react";
import "./App.css";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { caluculateTotals } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(caluculateTotals());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
