import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="6138dCMwqPL.png" alt="ad" className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">
                        Your shopping basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;