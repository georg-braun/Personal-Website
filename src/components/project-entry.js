import React from "react"
import { Badge } from "react-bootstrap"
import Img from "gatsby-image"

import styled from "styled-components"
import { FaClock } from "react-icons/fa"

const StyledProjectContainer = styled.div`
  display: flex;
  align-items : flex-end;
  border-style: solid;
  
  border-width: 1px;
  border-color: lightgrey;
  border-radius: 0px;
  
  padding: 5px;
  width: 340px;
  margin: 20px;
  border: 1px black solid;

  `

const ProjectTitle = styled.h3`
  margin-top: 5px;
`

const ProjectDuration = styled.span`
  color: gray;
`

const ProjectBody = styled.div`
  margin: 10px;
`

const ProjectTags = styled.div`
  margin-top: 10px;
`

const StyledBadge = styled(Badge)`
  margin-right: 5px;
  font-size: 0.9em;
`

const ProjectDescription = styled.div`
  color: gray;
  margin-top: 5px;
  
`

const ProjectFooter = styled.div`
  margin: 0px;
  padding: 0px;
`

const StyledImg = styled(Img)`
  picture {
    // picture styles
    border-width: 0px;
  }
  min-height: 140px;
  margin-top: 2px;
`

export default ({
  projectTitle,
  projectDuration,
  image,
  link,
  description,
  children,
  tags,
}) => {
  const tagBadges = tags.map(tag => (
    <StyledBadge variant="primary">{tag}</StyledBadge>
  ))

  if (image != null) {

    var hProjectImage = <StyledImg fluid={image} alt=""  />
  }

  return (
    <StyledProjectContainer>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {hProjectImage}
        <ProjectBody>
          <ProjectTitle>{projectTitle}</ProjectTitle>         
          <ProjectDuration>
            <FaClock /> {projectDuration}
          </ProjectDuration>
          <ProjectDescription>
          {description}
          </ProjectDescription>
          <ProjectTags>{tagBadges}</ProjectTags>
        </ProjectBody>
        <ProjectFooter>{children}</ProjectFooter>
      </a>
    </StyledProjectContainer>
  )
}
