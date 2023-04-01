import React from 'react';

const Blogstore = (props) => {
        const blog = props.blog;        
    return (
        <div className='card mt-5 text-center bg-light'>
            <div>
               <h5>Bookmarked Blogs :{blog.length}</h5>
            </div>
            <div>
            {
                blog?.map(product => <h3 className='card shadow-lg'>{product.Blogtitle}</h3>)
            }
            </div>
            
        </div>
    );
};

export default Blogstore;
