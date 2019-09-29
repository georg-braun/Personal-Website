import React from "react"
import { Badge } from "react-bootstrap"
import Img from "gatsby-image"

import styled from "styled-components"
import { FaClock } from "react-icons/fa"

const StyledProjectContainer = styled.div`
  border-style: solid;
  border-width: 0px 1px 0px 1px !important;
  border-width: 1px;
  border-color: lightgrey;
  border-radius: 5px;
  padding-bottom: -10px !important;
  padding-top: 3px;

  :hover {
    transform: translate(0, -5px);
    -webkit-transform: translate(0, -5px);
    -o-transform: translate(0, -5px);
    -moz-transform: translate(0, -5px);
    transition-duration: 0.5s;
  }
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

const ProjectDescription = styled.div`
  margin-top: 10px;
`

const StyledBadge = styled(Badge)`
  margin-right: 5px;
  font-size: 0.9em;
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
`

export default ({
  projectTitle,
  projectDuration,
  image,
  link,
  children,
  tags,
}) => {
  const tagBadges = tags.map(tag => (
    <StyledBadge variant="primary">{tag}</StyledBadge>
  ))

  return (
    <StyledProjectContainer>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <StyledImg fluid={image} alt="" />
        <ProjectBody>
          <ProjectTitle>{projectTitle}</ProjectTitle>

          <ProjectDuration>
            <FaClock /> {projectDuration}
          </ProjectDuration>
          <ProjectDescription>{tagBadges}</ProjectDescription>
        </ProjectBody>
        <ProjectFooter>{children}</ProjectFooter>
      </a>
    </StyledProjectContainer>
  )
}
