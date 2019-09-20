import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faXing,
  faLinkedinIn,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Contactlist = () => {
  const StyledContactIcon = styled(FontAwesomeIcon)`
    margin-left: ${props => (props.leftMostIcon ? "0px" : "20px")};
    color: white;

    :hover {
      color: orange;
    }
  `

  return (
    <span>
      <a
        href="https://www.xing.com/profile/Georg_Braun18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledContactIcon leftMostIcon icon={faXing} />
      </a>
      <a
        href="https://www.linkedin.com/in/georg-braun-41286b140/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledContactIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://gitlab.com/georg.braun92"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledContactIcon icon={faGitlab} />
      </a>
      <a
        href="mailto:mail@georg-braun.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledContactIcon icon={faEnvelope} />
      </a>
    </span>
  )
}

export default Contactlist
