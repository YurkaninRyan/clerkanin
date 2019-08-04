import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import TargetImage from "../components/images/TargetImage/TargetImage"

import "./css/registry.scss"

export default function Registry() {
  return (
    <Layout>
      <SEO title="Registry" />
      <div className="Registry">
        <h1>We need an ironing board</h1>
        <h5>and a few other things :)</h5>
        <div className="Registry__card">
          <a href="http://tgt.gifts/clerkaninwedding" target="_blank">
            <TargetImage />
          </a>
        </div>
      </div>
    </Layout>
  )
}
