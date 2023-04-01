import React from 'react';
import './khoelageblog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'


const Knowlageblog = (props) => {
    console.log(props)
    const {Authorname, Blogtitle, Blogcoverimage, Authorimage, Readtime, PublishDate, Hastag} = props.product
    const wtachTime = props.wtachTime;
    //blog---------------------------------------------------------------
    const blogset = props.blogset;
    
    return (
        <div className='Knowlageblog mb-5 border-bottom mt-5 '>
            <img className='w-100' src={Blogcoverimage} alt="" srcset="" />
            <div className='d-flex justify-content-between pt-4'>
                <div className='d-flex'>
                    <div>
                       <img className='imges mt-1 '  src={Authorimage} alt="" />

                    </div>
                    <div className='ps-4'>
                       <h4 className=' fs-2 fw-bold'>{Authorname}</h4>
                       <p>{PublishDate}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <div><h4 className='pt-2'>{Readtime} min read
                    </h4></div>
                    <div>

                        <button className='border border-0 bg-white ps-2' onClick={() => blogset(props.product)}><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                    
                    
                </div>
            </div>
            <h3 className='pt-2 fs-2 fw-bolder'>{Blogtitle}</h3>
            <p>{Hastag}</p>
            <div>
                <button className='text-primary  border border-0 bg-white mark-button' onClick={() => wtachTime(props.product)}> Mark as read</button>
            </div>
            
        </div>
    );
};

export default Knowlageblog;