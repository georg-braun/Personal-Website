import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReadingListEntry from "../components/reading-list-entry"

const siteTitle = "Reading List"

export default () => (
  <Layout title={siteTitle}  >
    <SEO title={siteTitle} />
    <h1>Reading List</h1>

    <h2>2019</h2>
    <h3>Januar</h3>
    <ul>
      <ReadingListEntry 
        title="Goodbye, CleanCode" 
        url="https://overreacted.io/goodbye-clean-code"
        comment="Möglichst generische Lösungen sind nicht unbedingt hilfreich."/>      
    </ul>
  
  </Layout>
)
