import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import MaasImage from "../components/images/MaasImage/MaasImage"

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

const Map = withScriptjs(
  withGoogleMap(function Map(props) {
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 39.9720698, lng: -75.1452789 }}
      >
        <Marker position={{ lat: 39.9720698, lng: -75.1452789 }}></Marker>
      </GoogleMap>
    )
  })
)

export default function Venue() {
  return (
    <Layout>
      <SEO title="Venue | Clerkanin Wedding" />

      <section className="Venue">
        <div className="Venue__heading">
          <h1>
            Maas Building{" "}
            <a
              className="Venue__external-icon"
              href="http://www.maasbuilding.com/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </h1>
          <h4>1325 N Randolph St, Philadelphia, PA 19122</h4>
          <h6>
            <a
              href="https://www.google.com/maps/dir//Maas+Building,+1325+N+Randolph+St,+Philadelphia,+PA+19122/@40.1273579,-75.346435,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c6c8722a2cde35:0x4c1ba74ba873a077!2m2!1d-75.1452789!2d39.9720698!3e3"
              target="_blank"
            >
              Directions to the venue
            </a>
          </h6>
        </div>

        <div className="Venue__middle-content">
          <div className="Venue__details">
            <MaasImage />
          </div>
          <div className="Venue__map">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgeidwk_KkPjgFaUC880HzQ_j4TtAifQc&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <Description />
      </section>
    </Layout>
  )
}