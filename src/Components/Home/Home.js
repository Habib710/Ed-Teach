import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react';
import { Link,   } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Banner from '../Banner/Banner'
import {
  faBookReader,
  faUser,
  faMessage,
  faLaptop,
  faUsers,
  faFilm,
  faChartLine,
  faCertificate,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import pp from '../../img/testi_01.png'

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
        <hr className="w-25 m-auto mb-5 c-tomato fw-2" />
        <div className="Card-css">
          {services.map((service) => (
            <Card className="card-size">
              <Card.Img variant="top" height="190px" src={service.pic} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.about}</Card.Text>
                <Link to={'/service/'+service.name}>
                <button className="btn btn-css">Enroll Now</button></Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
      {/* our instractor....... */}

      <section className="container">
        <h1 className="text-center pt-5">Our Instructors</h1>
        <hr className="w-25 m-auto my-5  c-tomato fw-bolder" />
        <h4 className="text-center pb-5">Meet Our Awesome & Creative Team</h4>

        <div className="img-css pb-5">
          <div className="team1">
            <h5 className="img-h">Mohammad Kabir </h5>
          </div>
          <div className="team2">
            <h5 className="img-h">Gopche suriya </h5>
          </div>
          <div className="team3">
            <h5 className="img-h">Johan roy</h5>
          </div>
          <div className="team4">
            <h5 className="img-h"> Akbor Ali </h5>
          </div>
        </div>
      </section>
      {/* Our Features */}
      <section className="container py-5">
        <h1 className="text-center py-3">Our Features</h1>
        <hr className="w-25 m-auto my-2  c-tomato fw-bolder" />
        <h5 className="text-center py-5">
          Why You Should Purchase This Template
        </h5>

        <div className="feature-main py-5">
          <div className="feature">
            <div className="px-3 ">
              <FontAwesomeIcon
                className="fs-1 c-tomato"
                icon={faLaptop}
              ></FontAwesomeIcon>
            </div>

            <div>
              <h3>Learn Online</h3>
              <hr className="w-25  my-3  c-tomato fw-bolder" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiing elit. Integer
                lorem quam, adipiscing vel condimentum tristique. Read More
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="px-3">
              <FontAwesomeIcon
                className="fs-1 c-tomato"
                icon={faUsers}
              ></FontAwesomeIcon>
            </div>

            <div>
              <h3>Expert Professors</h3>
              <hr className="w-25  my-3  c-tomato fw-bolder" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiing elit. Integer
                lorem quam, adipiscing vel condimentum tristique. Read More
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="px-3">
              <FontAwesomeIcon
                className="fs-1 c-tomato"
                icon={faFilm}
              ></FontAwesomeIcon>
            </div>

            <div>
              <h3>Video & Audio Courses</h3>
              <hr className="w-25  my-3  c-tomato fw-bolder" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiing elit. Integer
                lorem quam, adipiscing vel condimentum tristique. Read More
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="px-3">
              <FontAwesomeIcon
                className="fs-1 c-tomato"
                icon={faChartLine}
              ></FontAwesomeIcon>
            </div>

            <div>
              <h3>Communicate With People</h3>
              <hr className="w-25  my-3  c-tomato fw-bolder" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiing elit. Integer
                lorem quam, adipiscing vel condimentum tristique. Read More
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="px-3">
              <FontAwesomeIcon
                className="fs-1 c-tomato"
                icon={faCertificate}
              ></FontAwesomeIcon>
            </div>

            <div>
              <h3>Trusted Certifications</h3>
              <hr className="w-25  my-3  c-tomato fw-bolder" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiing elit. Integer
                lorem quam, adipiscing vel condimentum tristique. Read More
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="px-3">
              <FontAwesomeIcon
                className="fs-1 c-tomato"
                icon={faBook}
              ></FontAwesomeIcon>
            </div>

            <div>
              <h3>Professional Courses</h3>
              <hr className="w-25  my-3  c-tomato fw-bolder" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiing elit. Integer
                lorem quam, adipiscing vel condimentum tristique. Read More
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="last py-5">
        <div className="text-center container text-white pt-5 mt-5">
          <img src={pp} alt="img" />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            quis nihil deserunt odit laudantium, ad est reiciendis aliquid
            labore magnam optio facere et accusamus numquam! Recusandae iste
            placeat sapiente aut!
          </h4>
          <h5>
            {' '}
            Md Habib <br /> - CEO , Ed Teach Ltd.{' '}
          </h5>
        </div>
      </section>
    </div>
  )
}

export default Home
