import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="fotter-main">
      <div className="div-main d-lg-flex p-5 text-white">
        <div>
          <h3>Abou Us</h3>
          <p>
            Suspendisse non augue tincidunt, ullaorper odio vel, <br /> tempor
            risus. In cursus lacus mattis consectetur.
          </p>
          <p>
            {' '}
            <FontAwesomeIcon
              className="c-tomato"
              icon={faLocationArrow}
            ></FontAwesomeIcon>{' '}
            2 AlBahr St, Tanta, AlGharbia, Egypt.
          </p>
          <p>
            <FontAwesomeIcon
              className="c-tomato"
              icon={faPhone}
            ></FontAwesomeIcon>{' '}
            +2 01065370701
          </p>
          <p>
            {' '}
            <FontAwesomeIcon
              className="c-tomato"
              icon={faEnvelope}
            ></FontAwesomeIcon>{' '}
            7oroof@7oroof.com
          </p>
        </div>
        <div>
          <h3>Popular Tags</h3>
          <p> ponsive #Modern #Coursat #HTML #Fresh #Corporate #Creative</p>
          <h3 className="py-4">Social Link </h3>
          <FontAwesomeIcon
            className="fs-1 pe-4 c-tomato"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fs-1 px-4 c-tomato"
            icon={faInstagram}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fs-1 px-4 c-tomato"
            icon={faTelegram}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fs-1 px-4 c-tomato"
            icon={faTwitter}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fs-1 px-4 c-tomato"
            icon={faGithub}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="habib ">
        <h4>Ed Teach Ltd.</h4>
        <h5>Devoloped By : Md Habibullah </h5>
        <h6>Copyright @ 2022</h6>
      </div>
    </div>
  )
}

export default Footer
