import React from "react"
import { FaXing, FaLinkedin, FaGitlab, FaEnvelope } from "react-icons/fa"
import styled from "styled-components"

const Contactlist = () => {
  const StyledIconContainer = styled.span`
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
        <StyledIconContainer leftMostIcon>
          <FaXing />
        </StyledIconContainer>
      </a>
      <a
        href="https://www.linkedin.com/in/georg-braun-41286b140/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIconContainer>
          <FaLinkedin />
        </StyledIconContainer>
      </a>
      <a
        href="https://gitlab.com/georg.braun92"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIconContainer>
          <FaGitlab />
        </StyledIconContainer>
      </a>
      <a
        href="mailto:mail@georg-braun.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIconContainer>
          <FaEnvelope />
        </StyledIconContainer>
      </a>
    </span>
  )
}

export default Contactlist
