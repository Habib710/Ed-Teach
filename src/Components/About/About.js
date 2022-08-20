import React from 'react';
import aimg from '../../img/downl10.jpg';

const About = () => {
    return (
        <div className='container'>
            <h1 className='p-5 text-center'>ALL YOU WANT TO KNOW ABOUT US</h1>

            <div className='d-lg-flex py-5 '>
                <img className='p-5' src={aimg} alt="img" />

                <p className='p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex animi quis recusandae iusto harum id esse iure! Eum, adipisci pariatur. Amet cum architecto ipsum laboriosam accusantium labore quibusdam similique deleniti!</p>
            </div>
            
        </div>
    );
};

export default About;