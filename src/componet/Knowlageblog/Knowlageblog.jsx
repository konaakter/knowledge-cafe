import React from 'react';
import './khoelageblog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'


const Knowlageblog = (props) => {
    console.log(props)
    const {Authorname, Blogtitle, Blogcoverimage, Authorimage, Readtime} = props.product
    const wtachTime = props.wtachTime;
    //blog---------------------------------------------------------------
    const blogset = props.blogset;
    
    return (
        <div className='Knowlageblog mb-5 border-bottom mt-5 '>
            <img className='w-100' src={Blogcoverimage} alt="" srcset="" />
            <div className='d-flex justify-content-between pt-4'>
                <div className='d-flex'>
                   <img className='imges '  src={Authorimage} alt="" />
                   <h4 className='blog pt-2 ps-4 fs-2 fw-blod'>{Authorname}</h4>
                </div>
                <div className='d-flex'>
                    <div><h4>{Readtime} min read
                    </h4></div>
                    <div className='ps-2'>

                        <button className='border border-0 bg-white' onClick={() => blogset(props.product)}><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                    
                    
                </div>
            </div>
            <h3 className='pt-4 fs-2 fw-blod'>{Blogtitle}</h3>
            <p>#programin #communicatoin</p>
            <div>
                <button className='text-primary  border border-0 bg-white mark-button' onClick={() => wtachTime(props.product)}> Mark as read</button>
            </div>
            
            
        </div>
    );
};

export default Knowlageblog;