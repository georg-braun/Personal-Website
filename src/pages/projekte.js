import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "react-bootstrap"
import { Button } from "semantic-ui-react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import ProjectEntry from "../components/project-entry"

const StyledButton = styled(Button)`
  margin-bottom: 5px !important;

  :hover {
    background-color: orange !important;
  }
`

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap : wrap;
  margin-top: 20px;
`

const StyledIconContainer = styled.span`
  margin-right: 10px;
`

const siteTitle = "Projekte"
export default ({ data }) => (
  <Layout title={siteTitle}>
    <SEO title={siteTitle} />

    <ProjectContainer>

    <ProjectEntry
            projectTitle="Familienstammbaum"
            projectDuration="08/2019"
            image={data.familienstammbaum.edges[0].node.fluid}
            description="Erstellung eines Familiengraphen mit der Möglichkeit flexible Familienstammbäume zu erstellen. Somit ist es möglich mehrere Familienbäume aus einer Graphenstruktur zu erzeugen."
            link="http://stammbaum.georg-braun.de"
            tags={["React", "DTree"]}
          >
            <StyledButton
              fluid
              href="https://github.com/velox1992/Family-Tree"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIconContainer>
                <FaGithub />
              </StyledIconContainer>
              Code + Projektbeschreibung
            </StyledButton>
          </ProjectEntry>

          <ProjectEntry
            projectTitle="GraphToDTreeConverter"
            projectDuration="08/2019"
            image={data.graphtodtreeconverter.edges[0].node.fluid}
            description="Converter der eine gegebene Graphenstruktur, in Abhängkeit eines Root-Knotens, in eine Baumstruktur umwandelt."
            link="https://www.npmjs.com/package/graphtodtreeconverter/"
            tags={["JavaScript", "NPM"]}
          >
            <StyledButton
              fluid
              href="https://github.com/velox1992/GraphToDTreeConverter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIconContainer>
                <FaGithub />
              </StyledIconContainer>
              Code + Projektbeschreibung
            </StyledButton>
          </ProjectEntry>


          <ProjectEntry
            projectTitle="Seminararbeit: Implementierung Objektorientierter-Konstrukte in der Java Virtual Machine"
            projectDuration="Winter 2018"
            image={data.seminararbeitJvm.edges[0].node.fluid}            
            description="Seminararbeit über die Umsetzung von objektontierter auf der Ebene der Java Virtual Machine."
            link="https://github.com/velox1992/Study-Seminararbeit-OO-In-Der-JVM-WS1819/blob/master/Seminararbeit.pdf"
            tags={["JVM"]}
          >          
          </ProjectEntry>

        <ProjectEntry
            projectTitle="Augmented Reality mit Matlab"
            projectDuration="Winter 2016"
            image={data.bildverarbeitungArBild.edges[0].node.fluid}
            description="Eine Augmented Reality Anwendung die mit Matlab entwickelt wurde. Die Anwendung erkennt ein Film-Cover und spielt an der Position den Trailer ab."
            link="https://github.com/velox1992/Study-Image-Processing-WS2016"
            tags={["Matlab"]}
          >
            <StyledButton
              fluid
              href="https://github.com/velox1992/Study-Image-Processing-WS2016"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIconContainer>
                <FaGithub />
              </StyledIconContainer>
              Code + Projektbeschreibung
            </StyledButton>
          </ProjectEntry>

        <ProjectEntry
            projectTitle="AR mit OpenCV und OpenGL"
            projectDuration="Sommer 2016"
            image={data.computerGrafikArBild.edges[0].node.fluid}
            description="Entwicklung einer Augmented Reality Anwendung mit OpenCV und OpenGL. Verschiedene Formen werden auf ArUco Markern gerendert. "
            link="https://github.com/velox1992/Study-Computer-Graphics-SS2016"
            tags={["OpenCV", "OpenGL", "C++"]}
          >
            <StyledButton
              fluid
              href="https://github.com/velox1992/Study-Computer-Graphics-SS2016"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIconContainer>
                <FaGithub />
              </StyledIconContainer>
              Code + Projektbeschreibung
            </StyledButton>
          </ProjectEntry>

      
    </ProjectContainer>
  </Layout>
)

export const query = graphql`
  {
    familienstammbaum: allImageSharp(
      filter: { fluid: { originalName: { regex: "/stammbaum-preview.jpg/" } } }
    ) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
    graphtodtreeconverter: allImageSharp(filter: {fluid: {originalName: {regex: "/arrow-wall.jpg/"}}}) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
    computerGrafikArBild: allImageSharp(filter: {fluid: {originalName: {regex: "/computerGrafikArProjekt.png/"}}}) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
    bildverarbeitungArBild: allImageSharp(filter: {fluid: {originalName: {regex: "/bildverarbeitungArProjekt.png/"}}}) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
    seminararbeitJvm: allImageSharp(filter: {fluid: {originalName: {regex: "/seminararbeitJvm.jpg/"}}}) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`
