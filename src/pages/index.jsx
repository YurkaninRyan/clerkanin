import React from "react"

// import proposal from "../videos/proposal.mp4"

import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"
import ImageOfUsLong from "../components/images/us/ImageOfUsLong/ImageOfUsLong"
import "./css/index.scss"

function Story() {
  return (
    <>
      <p>
        Luckily, one day, Alana had to cover a shift I was also working. We hit
        it off immediately. Talking was effortless. Everything we talked about
        was hilarious to us.
      </p>

      <p>
        I finally worked up the courage to ask her out, but botched the
        delivery. She still says to this day I didn't ask her out. We ended up
        crossing paths again at a party, and I asked her out again. She said
        yes. We went to Parc and walked around Rittenhouse
      </p>

      <p>
        We dated through college, moved in together in Fairmount, moved out to
        Doylestown, and came back. We've been on adventures together, and picked
        up our fur child Pepe
      </p>

      <p>
        At the end of 2018, I put together plan to marry her. I convinced her to
        come with me to France and I worked to get her the perfect ring. On May
        27th 2019, we arrived in Paris and I proposed on top of the beautiful
        Pont Alexandre III. Alana said yes, and it was the best day of my life.
      </p>

      <p>
        Now we're getting married in the city that we fell in love in, and we
        can't wait to share it with you.
      </p>
    </>
  )
}

export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Home">
        <ImageOfUsLong />
        <LayoutConstrained>
          <h1>We were working the same job, different shifts.</h1>
          <Story />
        </LayoutConstrained>
      </div>
    </Layout>
  )
}
