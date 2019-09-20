import React from "react"
import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
import AvatarImg from "../images/avatar.png"

const StyledHeaderAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  margin: 0px;
`

const AvatarLocationDescription = styled.span`
  font-size: 0.7em;
  color: #fdfffc;
`

const VisitCard = () => (
  <>
    <Container>
      <Row>
        <Col>
          <StyledHeaderAvatar src={AvatarImg} alt="Avatar"></StyledHeaderAvatar>
        </Col>
        <Col className="align-self-center">
          <AvatarLocationDescription>
            Georg Braun | 📍 Aachen | 👷 Softwareentwickler
          </AvatarLocationDescription>
        </Col>
      </Row>
    </Container>
  </>
)

export default VisitCard
