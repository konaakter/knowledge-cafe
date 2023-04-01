import React from 'react';

const Blogstore = (props) => {
        const blog = props.blog;        
    return (
        <div className='card mt-5 bg-light'>
            <div>
               <h3 className='f-2 fw-bold text-center'>Bookmarked Blogs :{blog.length}</h3>
            </div>
            <div>
            {
                blog?.map(product => <h3 className='border p-3 shadow-sm'>{product.Blogtitle}</h3>)
            }
            </div>
            
        </div>
    );
};

export default Blogstore;
