import React from 'react'
import './Checkout.scss'

const Checkout = () => {
    return (
        <div className='checkout'>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>


        </div>
    )
}

export default Checkout