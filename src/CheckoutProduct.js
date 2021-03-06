import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removefromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct_image' src={image} alt={title} />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map(() => (<p>⭐</p>))}
                </div>
                {!hideButton && (<button onClick={removefromBasket}>Remove from Basket</button>)}

            </div>
        </div>
    );
}

export default CheckoutProduct;