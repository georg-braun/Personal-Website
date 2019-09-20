import React from "react"
import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
import AvatarImg from "../images/avatar.png"

const StyledHeaderAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: 0px;
`


const AvatarLocationDescription = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 0.7em;
  color: #fdfffc;
  line-height: normal;
  margin-left: 10px;
  margin-right: 20px;
  font-size: 0.6em;
`

const VisitCard = () => (
  <>
    <div>
      <StyledHeaderAvatar src={AvatarImg} alt="Avatar"></StyledHeaderAvatar>

      <AvatarLocationDescription>
        Georg Braun <br></br>
        <span role="img" aria-label="gps">
          📍
        </span>
        Aachen <br></br>
        <span role="img" aria-label="worker">
          👷
        </span>
        Softwareentwickler
      </AvatarLocationDescription>
    </div>
  </>
)

export default VisitCard
