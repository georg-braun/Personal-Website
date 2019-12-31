import React from "react"
import { Row, Col, Badge } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledBlogEntry = styled.div`
  margin-bottom: 20px;
  padding: 5px;
  border-style: solid;
  border-color: lightgray;
  border-width: 2px;
  border-radius: 5px;
  
`

const StyledDate = styled.div`
  text-align: right;
`

const KnowledgeLink = ({ title, path, tags, date }) => {

  var hTagString = "";
  if (tags != null){
    hTagString = tags.join(", ");
  }

  console.log(tags)
  return (
    <StyledBlogEntry>
        <Link to={path}>
      <Row key={title}>
        <Col>       
            <p>{title}</p>
 
        </Col>        
      </Row>
      <Row>
      <Col>
          <small>{hTagString}</small>
        </Col>
        <Col md={{ span: 4, offset: 2}}>
          <StyledDate>
          {date}
          </StyledDate>
        </Col>
      </Row>
      </Link>
    </StyledBlogEntry>
  )
}

export default KnowledgeLink
