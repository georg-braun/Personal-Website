import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const siteTitle = "Projekte"
export default ({ data }) => (
  <Layout title={siteTitle}>
    <SEO title={siteTitle} />
  </Layout>
)
