import React from "react"
import { Badge } from "react-bootstrap"
import {
  FaWrench,
  FaClock,
  FaMapMarkerAlt,
  FaSchool,
  FaIndustry,
  FaGraduationCap,
  FaBriefcase,
  FaRoute,
  FaHammer,
} from "react-icons/fa"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <SEO title="Profil" />

    <div class="container">
      <ul class="timeline">
        <li>
          <div class="timeline-badge success">
            <FaWrench />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Georg.create()</h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 1992
                </small>

                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Simmerath
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
            <FaSchool />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Realschule Monschau</h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 2003 - 2009
                </small>
                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Monschau
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
            <FaSchool />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Fachhochschulreife</h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 2009 - 2011
                </small>
                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Aachen
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
            <FaIndustry />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">
                Ausbildung Fachinformatiker Anwendungsentwicklung
              </h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 2011 - 2014
                </small>
                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Oberforstbach (Aachen)
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
            <FaGraduationCap />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">B.Sc. Ingenieurinformatik</h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 2014-2018
                </small>
                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Aachen
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
            <FaBriefcase />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Werkstudent Softwareentwickler</h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 2014+
                </small>
                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Oberforstbach (Aachen)
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
            <FaRoute />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Praxissemester Bosch Engineering</h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 03/2017 - 08/2017
                </small>
                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Abstatt
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
            <FaGraduationCap />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">
                M.Sc. Information Systems Engineering
              </h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 2018 - 2019
                </small>
                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Aachen
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
            <FaHammer />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Softwareentwickler (INFORM GmbH)</h4>
              <p>
                <small class="text-muted">
                  <FaClock /> 2019+
                </small>
                <br></br>
                <small class="text-muted">
                  <FaMapMarkerAlt /> Oberforstbach (Aachen)
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
