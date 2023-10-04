import React from 'react';
import './internship.css';
import google  from './certificate.png';

const Internship = () => {
    const data = [
        { id: 1, img: google, title: "" },

    ]
    return (
        <div className='intern_container' id='Internship'>
            <div className='intern_head'>
                <span>Personal Achievements</span>
            </div>
            <div className='intern_wrap' style={{position:'relative'}}>
                {data.map((value, i) => (
                    <div className='intern_details'>
                        <div className='intern_img'>
                            <img src={value.img} alt="internship" />
                        </div>
                        <span>{value.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Internship