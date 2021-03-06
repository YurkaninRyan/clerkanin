import React from "react"
import Countdown from "react-countdown"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ImageOfUsLong from "../components/images/us/ImageOfUsLong/ImageOfUsLong"
import "./css/index.scss"

export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Home">
        <ImageOfUsLong />
        <div className="Home__meta">
          <b>September 26th, 2020</b>
          <br />
          <Countdown date={new Date("2020-09-26 16:00")} renderer={({ days }) => {
            if (days === 0) { return (<span>We're getting married today!</span>)}
            if (days === 1) { return <span>We're getting married tomorrow!</span>}
            if (Number.isNaN(days) || !Number.isFinite(days)) { return null }
            return <span><time>{days} day{days === 1 ? "" : "s"}</time> left until the wedding!</span>
          }} />
        </div>
      </div>
    </Layout>
  )
}
