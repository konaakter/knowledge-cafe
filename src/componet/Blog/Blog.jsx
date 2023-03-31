import React, { useEffect, useState } from 'react';
import Knowlageblog from '../Knowlageblog/Knowlageblog';
import './Blog.css'

const Blog = () => {
    const [products, setproructs] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproructs(data))
    }, [])

    return (
        <div className='blog-container '>
            <div className='blog-body'>
                <h1>blog</h1>
                {
                    products.map( product => <Knowlageblog
                        key={product.id}
                        product={product} 
                    ></Knowlageblog>)

                }

            </div>
            <div className='blog-store-body'>
                <h1>blog clock</h1>

            </div>
            
        </div>
    );
};

export default Blog;