import React from "react"

import proposal from "../videos/proposal.mp4"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ImageOfUsYoung from "../components/images/ImageOfUsYoung/ImageOfUsYoung"
import ImageOfUsYoung2 from "../components/images/ImageOfUsYoung2/ImageOfUsYoung2"
import ImageOfUsAdventure from "../components/images/ImageOfUsAdventure/ImageOfUsAdventure"
import ImageOfPepe from "../components/images/ImageOfPepe/ImageOfPepe"

function Story() {
  return (
    <>
      <p>
        We both ended up working at the same job but on different shifts. One
        day we ended up working together and it was like we were long lost best
        friends.
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "338px", marginBottom: "24px", marginRight: "16px" }}
        >
          <ImageOfUsYoung />
        </div>
        <div style={{ width: "360px", marginBottom: "24px" }}>
          <ImageOfUsYoung2 />
        </div>
      </div>

      <p>
        We bumped into each other a few times afterwards and Ryan worked up the
        courage to ask Alana out. Our first date was in Philadelphia at a french
        restaurant named Parc.
      </p>

      <p>
        Time flew by and after two years we moved in together. We lived in
        Fairmount for a year, then moved to Doylestown.{" "}
      </p>

      <p>
        During that time we went on adventures together and made each other
        brave. We got Pepe and we've been a happy little family ever since.
      </p>

      <div style={{ display: "flex" }}>
        <div
          style={{ width: "360px", marginBottom: "24px", marginRight: "16px" }}
        >
          <ImageOfUsAdventure />
        </div>
        <div style={{ width: "360px", marginBottom: "24px" }}>
          <ImageOfPepe />
        </div>
      </div>

      <p>
        On May 27th 2019, we arrived in Paris and Ryan proposed on top of the
        beautiful Pont Alexandre III. Alana said yes and the rest is history.
      </p>

      <p>
        Now we're getting married in the city that we feel in love in, and we
        can't wait to share it will all of you.
      </p>

      <video controls style={{ width: "400px" }}>
        <source src={proposal} type="video/mp4" />
      </video>
    </>
  )
}

export default function Index() {
  return (
    <Layout>
      <SEO title="Our Story" />
      <div className="OurStory">
        <h1>We met at college</h1>
        <Story />
      </div>
    </Layout>
  )
}
