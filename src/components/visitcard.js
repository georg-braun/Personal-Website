import React from "react"
import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
import AvatarImg from "../images/avatar.png"

const StyledAvatarImg = styled.img`
  border-radius: 50%;
  display: block;
  width: 150px;
`

const VisitCard = () => (
  <>
    <Container>
      <Row>
        <Col>
          <span class="float-right">
            <StyledAvatarImg src={AvatarImg} alt="Avatar"></StyledAvatarImg>
          </span>
        </Col>
        <Col className="align-self-center">
          <p>
            Georg Braun <br></br>
            Aachen <br></br>
            Softwareentwickler
          </p>
        </Col>
      </Row>
    </Container>
  </>
)

export default VisitCard
