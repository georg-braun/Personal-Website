import React from "react"
import { Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faXing,
  faLinkedinIn,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contactlist = () => {
  return (
    <Nav>
      <Nav.Item as="li">
        <a href="https://www.xing.com/profile/Georg_Braun18" target="_blank">
          <FontAwesomeIcon icon={faXing} />
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a
          href="https://www.linkedin.com/in/georg-braun-41286b140/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a href="https://gitlab.com/georg.braun92" target="_blank">
          <FontAwesomeIcon icon={faGitlab} />
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a href="mailto:mail@georg-braun.de" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </Nav.Item>
    </Nav>
  )
}

export default Contactlist
