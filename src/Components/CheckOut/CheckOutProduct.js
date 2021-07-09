import React from 'react'
import './CheckOutProduct.css'
import {useStateValue} from '../../Reducer/StateProvider'


const CheckOutProduct = ({id,title,image,price,rating}) => {

    const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,


        })
  }

    return (
        <>
        <div className="checkoutproduct">
            <img className="checkoutproduct_image" src={image}/>

            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutproduct_rating">
                    {
                        Array(rating).fill().map((_,i)=>(
                            <p>*</p>
                        ))
                    }
                </p>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
            
        </div>
        </>
    )
}

export default CheckOutProduct
