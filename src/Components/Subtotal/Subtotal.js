import React from 'react'
import './Subtotal.css'
import CurrencyFormatter from 'react-currency-format'
import {useStateValue} from '../../Reducer/StateProvider'
// import { Input } from '@material-ui/icons'4
import {getBasketTotal} from '../../Reducer/Reducer'

    const Subtotal = () => {
        
        const [{basket}, dispatch] = useStateValue();
        
        return (
            <div className="subtotal">
                <CurrencyFormatter
                renderText={(value)=> (
                    <>
                    <p>
                    Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button>Proceed to Checkout</button>
            </div>
        )
    }

    export default Subtotal
