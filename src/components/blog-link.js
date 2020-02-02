import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link as GatsbyLink} from "gatsby"
import styled from "styled-components"

const StyledBlogLink = styled.div`
  margin-bottom: 20px;
  padding: 5px;
  border-style: solid;
  border-color: lightgray;
  border-width: 2px;
  border-radius: 3px;  
`

const StyledLink = styled(GatsbyLink)`
  color: black;
`;


const StyledDate = styled.div`
  text-align: right;
`

const BlogLink = ({ title, path, tags, date }) => {

  var hTagString = "";
  if (tags != null){
    hTagString = tags.join(", ");
  }

    return (
    <StyledBlogLink>
        <StyledLink to={path} color="black">
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
      </StyledLink>
    </StyledBlogLink>
  )
}

export default BlogLink
