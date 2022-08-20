import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Banner from '../Banner/Banner'
import {
  faBookReader,
  faUser,
  faMessage,
} from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import team1 from '../../img/team_01.jpg'
import team2 from '../../img/team_02.jpg'
import team3 from '../../img/team_03.jpg'
import team4 from '../../img/team_04.jpg'

const Home = () => {
  const [services, setservices] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setservices(data))
  }, [])

  return (
    <div>
      <Banner></Banner>
      <section className="container ">
        <div className="section1-css">
          <div className="p-5">
            <FontAwesomeIcon
              className="fs-2"
              icon={faBookReader}
            ></FontAwesomeIcon>
            <h3 className="py-4">Learn Anything Online</h3>
            <p>
              Our tutorials are made in a way where you get to know how the
              things work behind the scenes, and how you can use them to your
              advantage
            </p>
          </div>
          <div className="p-5">
            <FontAwesomeIcon
              className="fs-2"
              icon={faMessage}
            ></FontAwesomeIcon>
            <h3 className="py-4">Speak With Others</h3>
            <p>
              Our tutorials are made in a way where you get to know how the
              things work behind the scenes, and how you can use them to your
              advantage
            </p>
          </div>
          <div className="p-5">
            <FontAwesomeIcon className="fs-2" icon={faUser}></FontAwesomeIcon>
            <h3 className="py-4">Speak With Others</h3>
            <p>
              Our tutorials are made in a way where you get to know how the
              things work behind the scenes, and how you can use them to your
              advantage
            </p>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="text-center py-4 ">OUR SERVICES</h2>
        <hr className='w-25 m-auto mb-5 c-tomato fw-2' />
        <div className="Card-css">
          {services.map((service) => (
            <Card className='card-size'>
              <Card.Img variant="top" height="190px"  src={service.pic} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.about}</Card.Text>
                <button className='btn btn-css' >Enroll Now</button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
      {/* our instractor....... */}

      <section className='container'>
        <h1 className='text-center pt-5'>Our Instructors</h1>
        <hr className='w-25 m-auto my-3  c-tomato fw-bolder' />
        <h4 className='text-center pb-5'>Meet Our Awesome & Creative Team</h4>

        <div className='img-css pb-5'>
            
            <div className='team1'>  
                <h5  className='img-h'>Mohammad Kabir </h5>  
            </div>
            <div className='team2'>  
                <h5  className='img-h'>Gopche suriya </h5>  
            </div>
            <div className='team3'>  
                <h5  className='img-h'>Johan roy</h5>  
            </div>
            <div className='team4'>  
                <h5 className='img-h'> Akbor Ali </h5>  
            </div>
            
            
        </div>

      </section>

      <section>
        
      </section>
    </div>
  )
}

export default Home
