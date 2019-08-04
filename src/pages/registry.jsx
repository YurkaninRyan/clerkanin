import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import TargetImage from "../components/images/TargetImage/TargetImage"

import "./css/registry.scss"

export default function Registry() {
  return (
    <Layout>
      <SEO title="Registry | Clerkanin Wedding" />
      <div className="Registry">
        <div className="Registry__card">
          <a href="https://tgt.gifts/clerkaninwedding" target="_blank">
            <TargetImage />
          </a>
        </div>
      </div>
    </Layout>
  )
}
