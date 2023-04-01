import React from 'react';

const Spantime = (props) => {
    const cart = props.cart;
    let total = 0;
    for (const product of cart){
        total = total + product.Readtime

    }
    return (
        <div className='mt-4'>
            <div className='card text-center mt-5 bg-light border border-primary-subtle'>
                <h3 className='text-primary  f-3'>Spent time on read: {total} min</h3>
            </div>
            
        </div>
    );
        
};

export default Spantime;