import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"
import MaasImage from "../components/images/maas/MaasImage"
import MaasImage2 from "../components/images/maas/MaasImage2"
import MaasImage3 from "../components/images/maas/MaasImage3"
import Carousel from "../components/Carousel/Carousel"
import Banner from "../components/Banner/Banner";
import Map from "../components/Map/Map"

import parking from "../images/parking.jpg";

import "./css/venue.scss"

function Description() {
  return (
    <>
      <p>
        The Maas Building, originally built in 1859 as the Charles Maas Brewery,
        later became a trolleycar repair shop for the Girard St trolley line. In
        2008, the building had fallen into disrepair and was in use as storage
        for an architectural salvage business. A giant hole in the roof had
        caused a lot of water damage and one of the main trusses had failed. The
        original facade was boarded up.
      </p>
      <p>
        Ben and Catherine bought the building in 2008 and began to nurse it back
        to life. A structural engineer was brought in to fix the broken truss, a
        new roof was put on, and gradually the Maas Building began to awaken
        into it’s new existence. Using reclaimed wood and industrial materials,
        the Maas Building’s rehab was designed to incorporate modern ideas into
        the existing industrial structure: the facade is a combination of old
        arched windows and modern glass and steel design, the floors are
        polished concrete outfitted with radiant heat tubing, and a common
        entryway and kitchen area have soaring high ceilings that expose the
        building’s industrial past.
      </p>
      <p>
        Today, the Maas Building is in use as an arts space, cultural entity and
        event hall for many types of arts activities. With private workspaces as
        well as public venues, The Hi5 Recording Studio, Hi5 Video and The 5th
        Side all call the Maas Building home.
      </p>
    </>
  )
}

export default function Venue() {
  return (
    <Layout>
      <LayoutConstrained>
        <SEO title="Venue" />

        <section className="Venue">
          <div className="Venue__heading">
            <h1>
              Maas Building{" "}
              <a
                rel="noopener noreferrer"
                className="Venue__external-icon"
                href="http://www.maasbuilding.com/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </h1>
            <h6>1325 N Randolph St, Philadelphia, PA 19122</h6>
              <h6>
                <a
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/dir//Maas+Building,+1325+N+Randolph+St,+Philadelphia,+PA+19122/@40.1273579,-75.346435,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c6c8722a2cde35:0x4c1ba74ba873a077!2m2!1d-75.1452789!2d39.9720698!3e3"
                  target="_blank"
                >
                  Directions to the venue
                </a>
              </h6>
          </div>

          <Banner>
            Parking is in the lot directly across from the 1325 N Randolph St entrance, and is <b>not</b> overnight parking. <br />
            The entrance is on the other side, it's a little confusing so we made <a href={parking}>this handy diagram to help you!</a>
          </Banner>

          <br/>

          <div className="Venue__middle-content">
            <Carousel
              slides={[<MaasImage />, <MaasImage2 />, <MaasImage3 />]}
            />
            <Map lat={39.9720698} lng={-75.1452789} />
          </div>
          <Description />
        </section>
      </LayoutConstrained>
    </Layout>
  )
}
