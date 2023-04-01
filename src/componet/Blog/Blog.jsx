import React, { useEffect, useState } from 'react';
import Knowlageblog from '../Knowlageblog/Knowlageblog';
import Cart from '../Cart/Cart';
import './Blog.css';

const Blog = () => {
    const [products, setproructs] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproructs(data))
    }, [])
    const wtachTime = (product) =>{
        const newcart = [...cart, product];
        setcart(newcart);
    }
    

    return (
        <div className='blog-container row'>
            <div className='blog-body col-md-8'>
                {
                    products.map( product => <Knowlageblog
                        key={product.id}
                        product={product}
                        wtachTime = {wtachTime}

                    ></Knowlageblog>)

                }

            </div>
            <div className=' col-md-4'>
                <Cart cart={cart}></Cart>


            </div>
            
        </div>
    );
};

export default Blog;