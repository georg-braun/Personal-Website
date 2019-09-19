import React from "react"
import {Badge} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWrench,
  faClock,
  faMapMarkerAlt,
  faSchool,
  faIndustry,
  faGraduationCap,
  faBriefcase,
  faRoute,
  faHammer,
} from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"
import Layout from "../components/layout"
import "./timeline.css"

export default () => (
  <Layout>
    <SEO title="Profil" />

    <div class="container">
      <ul class="timeline">
        <li>
          <div class="timeline-badge success">
            <FontAwesomeIcon icon={faWrench} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Georg.create()</h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 1992
                </small>

                <br></br>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Simmerath
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p></p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge warning">
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Realschule Monschau</h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 2003 - 2009
                </small>
                <br></br>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Monschau
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p>Elwin-Christoffel-Realschule</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge danger">
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Fachhochschulreife</h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 2009 - 2011
                </small>
                <br></br>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Aachen
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p>Berufskolleg für Wirtschaft und Verwaltung, Simmerath</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge info">
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">
                Ausbildung Fachinformatiker Anwendungsentwicklung
              </h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 2011 - 2014
                </small>
                <br></br>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Oberforstbach
                  (Aachen)
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p>
                Ausbildung zum Fachinformatiker bei der INFORM GmbH in Aachen.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge warning">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">B.Sc. Ingenieurinformatik</h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 2014-2018
                </small>
                <br></br>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Aachen
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p>
                Studium der Informatik an der Fachhochschule Aachen mit dem
                Schwerpunkt Ingenieurinformatik.
              </p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge danger">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Werkstudent Softwareentwickler</h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 2014+
                </small>
                <br></br>
                <small class="text-muted">
                  <i class="fas fa-map-marker-alt"></i> Oberforstbach (Aachen)
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p>
                Werksstudenten-Tätigkeit als Softwareentwickler bei der INFORM
                GmbH.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge success">
            <FontAwesomeIcon icon={faRoute} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Praxissemester Bosch Engineering</h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 03/2017 - 08/2017
                </small>
                <br></br>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Abstatt
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p>Praxissemester bei der Bosch Engineering GmbH in Abstatt.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge warning">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">
                M.Sc. Information Systems Engineering
              </h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 2018 - 2019
                </small>
                <br></br>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Aachen
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p>
                Master-Studiengang Information Systems Engineering an der
                Fachochschule Aachen.
              </p>
            </div>
          </div>
        </li>
        <li class="timeline">
          <div class="timeline-badge info">
            <FontAwesomeIcon icon={faHammer} />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">
                Softwareentwickler (INFORM GmbH)
              </h4>
              <p>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faClock} /> 2019+
                </small>
                <br></br>
                <small class="text-muted">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Oberforstbach (Aachen)
                </small>
              </p>
            </div>
            <div class="timeline-body">
              <p>
                <Badge variant="info">C#</Badge>
                
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
)
