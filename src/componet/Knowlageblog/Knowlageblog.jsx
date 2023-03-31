import React from 'react';
import './khoelageblog.css'


const Knowlageblog = (props) => {
    const {Authorname, Blogtitle, Blogcoverimage, Authorimage, Readtime, PublishDate} = props.product
    return (
        <div className='Knowlageblog mb-5'>
            <img className='w-75' src={Blogcoverimage} alt="" srcset="" />
            <div className='d-flex me-5 pt-4'>
                <img className='imges'  src={Authorimage} alt="" />
                <h4 className='blog pt-2 ps-2'>{Authorname}</h4>
                <div>
                    <p>{Readtime} min read</p>
                </div>
            </div>
            <h3 className='pt-3 '>{Blogtitle}</h3>
            <div><a href="#">Mark as read</a></div>
            
            
        </div>
    );
};

export default Knowlageblog;