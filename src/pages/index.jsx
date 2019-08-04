import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ImageOfUs from "../components/images/ImageOfUs/ImageOfUs"

export default function Index() {
  return (
    <Layout>
      <SEO title="Home | Ryan & Alana" />
      <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <ImageOfUs />
      </div>
    </Layout>
  )
}
