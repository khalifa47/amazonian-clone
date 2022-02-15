import './Product.css';
import { useStateValue } from './StateProvider';

import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Product = ({ id, title, image, price, rating }) => {
    const pulseAn = keyframes`${pulse}`;

    const PulseDiv = styled.div`
        &:hover{
            animation: 0.75s ${pulseAn};
        }
    `;

    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    };

    return (
        <PulseDiv className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map(() => (<p>⭐</p>))}
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Basket</button>
        </PulseDiv>
    );
}

export default Product;