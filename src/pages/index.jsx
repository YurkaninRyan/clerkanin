import React from "react"

// import proposal from "../videos/proposal.mp4"

import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"
import ImageOfUsLong from "../components/images/us/ImageOfUsLong/ImageOfUsLong"
import "./css/index.scss"

export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Home">
        <ImageOfUsLong />
        <LayoutConstrained></LayoutConstrained>
      </div>
    </Layout>
  )
}
