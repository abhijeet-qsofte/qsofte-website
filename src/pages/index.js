import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi People</h1>
    <p>Welcome</p>
  </Layout>
)

export default IndexPage
