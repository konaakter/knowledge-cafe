import React, { useEffect, useState } from 'react';
import Knowlageblog from '../Knowlageblog/Knowlageblog';
import Blogstore from '../Blogstore/Blogstore';
import Cart from '../Cart/Cart';


const Blog = () => {
    const [products, setproructs] = useState([]);
    const [cart, setcart] = useState([]);
    //blog///////////////////////////////////////////////////
    const [blog, setblog] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproructs(data))
    }, [])
    const wtachTime = (product) =>{
        const newcart = [...cart, product];
        setcart(newcart);
    }
    //blog---------------------------------------
    
    const blogset = (product) =>{
        const newblog = [...blog, product];
        setblog(newblog);
    }


    

    return (
        <div className='blog-container row'>
            <div className='blog-body col-md-8'>
                {
                    products.map( product => <Knowlageblog
                        key={product.id}
                        product={product}
                        wtachTime = {wtachTime}
                        //blog---------------------------------------------------------------
                        blogset = {blogset}

                    ></Knowlageblog>)

                }

            </div>
            <div className=' col-md-4'>
                <Cart cart={cart}></Cart>
                <Blogstore blog={blog}></Blogstore>


            </div>
            
        </div>
    );
};

export default Blog;