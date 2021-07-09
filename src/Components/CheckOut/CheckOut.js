import React from 'react'
import './CheckOut.css'
import Subtotal from '../Subtotal/Subtotal'
import {useStateValue} from '../../Reducer/StateProvider'
import CheckOutProduct from './CheckOutProduct'

const CheckOut = () => {
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            {/* <h1>This is checkOut page</h1> */}
            <div className="checkout_left">
                <div className="checkout_ad">
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" width="100%" height="auto" alt="Home Products"/>

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Shopping Basket</h2>
                    {/* {CheckOutProduct} */}
                    {/* <CheckOutProduct
                    id="1233"
                    title="This is service"
                    image="https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    value={25.991}
                    rating={5}
                    /> */}
                            
                    {
                        basket.map(item => (
                            <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            value={item.value}
                            rating={item.rating}
                            />
                        ))


                        // basket.map((item, i) =>{
                        //     <CheckOutProduct
                        //     key={i}
                        //     id={item.id}
                        //     title={item.title}
                        //     image={item.image}
                        //     value={item.value}
                        //     rating={item.rating}
                        //     />
                        // })
                    }
                </div>
                </div> 
            </div>
            <div className="checkout_right">
                 <Subtotal/>
            </div>
        </div>
    )
}

export default CheckOut;
