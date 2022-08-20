import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,} from "@fortawesome/free-brands-svg-icons"
import React from 'react';
import Banner from '../Banner/Banner';
import {  faBookReader,faUser ,faMessage } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className='container '>
            <div className='section1-css px-5'>
                <div className='p-5'>
                    <FontAwesomeIcon className='fs-2' icon={faBookReader}></FontAwesomeIcon>
                    <h3 className='py-4'>Learn Anything Online</h3>
                    <p>Our tutorials are made in a way where you get to know how the things work behind the scenes, and how you can use them to your advantage</p>

                </div>
                <div className='p-5'>
                    <FontAwesomeIcon className='fs-2' icon={faMessage}></FontAwesomeIcon>
                    <h3 className='py-4'>Speak With Others</h3>
                    <p>Our tutorials are made in a way where you get to know how the things work behind the scenes, and how you can use them to your advantage</p>

                </div>
                <div className='p-5'>
                    <FontAwesomeIcon className='fs-2' icon={faUser}></FontAwesomeIcon>
                    <h3 className='py-4'>Speak With Others</h3>
                    <p>Our tutorials are made in a way where you get to know how the things work behind the scenes, and how you can use them to your advantage</p>

                </div>

            </div>
            </section>
            <section>
                <h1>fghgfh</h1>
            </section>
            
        </div>
    );
};

export default Home;