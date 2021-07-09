import React from 'react'
import '../Products/Product.css'
import {useStateValue} from '../../Reducer/StateProvider'



const Product = ({id,title,image,price,rating}) => {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket)
    const addtobasket = () => {
         dispatch({
             type:'ADD_TO_BASKET',
             item:{
                 id:id,
                 title:title,
                 image:image,
                 price:price,
                 rating:rating
             }
         })
    }



    return (
        <>
            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {/* <p>*</p> */}
                        {Array(rating).fill().map((_ , i)=>(
                            <p key={i}>*</p>
                        ))}
                        
                    </div>
                </div>
                <img alt="Trimmers" src={image}/>
                <button onClick={addtobasket}>Add to cart</button>
            </div>
        </>
    )
}

export default Product
