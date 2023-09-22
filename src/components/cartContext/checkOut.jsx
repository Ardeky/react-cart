import { useContext } from "react";
import CartContext from "./cartContext";
import { getCartTotal } from "../../utils";
import Contact from "../contact";

const CheckOut = () => {
    const { cart } = useContext(CartContext);
    
    return (
        <div>
            <h1>Checkout</h1>
            <h2>Resumen compra</h2>
            <div>
                <h4>Formulario de compra</h4>
                <Contact/>
            </div>
            <ul>
                <h4>Articulos a comprar</h4>
                {cart.map((item) =>(
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio/und: ${item.price}</p>
                        <p>Subtotal: ${item.quantity * item.price}</p>
                    </li>
                ))}
            </ul>
            <p> Total: {getCartTotal(cart)}</p>
        </div>
    );
};
export default CheckOut;
