import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"
import WyndhamImage from "../components/images/wyndham/WyndhamImage"
import WyndhamImage2 from "../components/images/wyndham/WyndhamImage2"
import WyndhamImage3 from "../components/images/wyndham/WyndhamImage3"
import Carousel from "../components/Carousel/Carousel"
import Banner from "../components/Banner/Banner"
import Map from "../components/Map/Map"

import "./css/hotel.scss"

function Description() {
  return (
    <>
      <p>
        This relaxed, modern downtown hotel is a 6-minute walk from the Liberty
        Bell landmark and is flush against Philadelphia's historic Old City.
      </p>
      <p>
        Old City is a historic neighborhood in Center City, Philadelphia, in the
        area near the Delaware River where William Penn and the Quakers first
        settled. To tourists, it is best known as the site of Independence Hall
        and its encompassing Independence National Historical Park, Elfreth's
        Alley, Carpenters' Hall, the Betsy Ross House, and many of
        Philadelphia's other historic sites
      </p>
      <p>
        <strong>
          If you're interested in exploring Philadelphia, we suggest trying some
          of these things:
        </strong>
      </p>
      <ul>
        <li>
          Visit the{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://theculturetrip.com/north-america/usa/pennsylvania/articles/10-amazing-things-to-see-and-do-in-old-city-philadelphia/"
          >
            historic sites
          </a>{" "}
          found all around Old City.
          <br /> We suggest the Revolution Museum, Betsy Ross House, and the
          Liberty Bell.
        </li>
        <li>
          Grab a bite to eat at a food stall in{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://readingterminalmarket.org/"
          >
            Reading Terminal Market.
          </a>
          <br />
          We suggest the Roast Pork Sandwhich from DiNic's, the Pastrami
          Sandwhich from Hershel's, and Beiler's donuts
        </li>
      </ul>
    </>
  )
}

export default function Hotel() {
  return (
    <Layout>
      <LayoutConstrained>
        <SEO title="Hotel" />

        <section className="Hotel">
          <div className="Hotel__heading">
            <h1>
              Wyndham Philadelphia Historic District{" "}
              <a
                rel="noopener noreferrer"
                className="Hotel__external-icon"
                href="https://www.wyndhamhotels.com/wyndham/philadelphia-pennsylvania/wyndham-philadelphia-historic-district/overview?CID=LC:HR::GGL:RIO:National:47153&iata=00093796"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </h1>
            <h6>400 Arch St, Philadelphia, PA 19106</h6>
            <h6>
              <a
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir//wyndham+old+city+hotel/@39.9520921,-75.1470951,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c88421a9f379:0xce18bea485fd9b80!2m2!1d-75.1469444!2d39.9522222"
                target="_blank"
              >
                Directions to the hotel
              </a>
            </h6>
            <h6>
              <a
                rel="noopener noreferrer"
                href="https://book.passkey.com/e/50026297"
                target="_blank"
              >
                Book your room in our wedding block
              </a>
            </h6>
          </div>

          <Banner>
            For guests staying at the Wyndham, the <bold>only</bold> shuttle from the hotel will leave promptly at 3pm!  If you're not there you'll have to find alternative means of transportation.
          </Banner>

          <br />

          <div className="Hotel__middle-content">
            <Carousel
              slides={[<WyndhamImage />, <WyndhamImage2 />, <WyndhamImage3 />]}
            />
            <Map lat={39.9520921} lng={-75.1470951} />
          </div>
          <Description />
        </section>
      </LayoutConstrained>
    </Layout>
  )
}
