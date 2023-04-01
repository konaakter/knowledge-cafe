import React from 'react';

const Blogstore = (props) => {
    const blog = props.blog;
    let bog;
    for (const product of blog){

        bog = product.Blogtitle;    
        
    }
    return (
        <div className='card mt-5 text-center bg-secondary-subtle'>
            <div>
               <h5>Bookmarked Blogs :{blog.length}</h5>
            </div>
            <div className='card'>
               <h3>{bog}</h3>
            </div>
            
        </div>
    );
};

export default Blogstore;