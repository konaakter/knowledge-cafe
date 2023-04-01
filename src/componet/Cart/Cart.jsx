import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (const product of cart){
        total = total + product.Readtime
    }
    return (
        <div className='mt-4'>
            <div className='card text-center mt-5'>
                <h3>Spent time on read: {total} min</h3>
            </div>
            
        </div>
    );
};

export default cart;