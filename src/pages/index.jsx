import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ImageOfUs from "../components/ImageOfUs/ImageOfUs"

export default function Index() {
  return (
    <Layout>
      <SEO title="Clerkanin Wedding" />
      <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <ImageOfUs />
      </div>
    </Layout>
  )
}
