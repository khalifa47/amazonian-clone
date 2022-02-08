import './Checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg" alt="ad" className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">
                        Your shopping basket
                    </h2>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;