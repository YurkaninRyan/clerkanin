import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"
import HotelImage1 from "../components/images/hotel/HotelImage1"
import HotelImage2 from "../components/images/hotel/HotelImage2"
import HotelImage3 from "../components/images/hotel/HotelImage3"
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
              Philadelphia Marriott Old City{" "}
              <a
                rel="noopener noreferrer"
                className="Hotel__external-icon"
                href="https://www.marriott.com/hotels/travel/phlmo-philadelphia-marriott-old-city/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </h1>
            <h6>One Dock Street, Philadelphia, Pennsylvania 19106 USA</h6>
            <h6>215-238-6000</h6>
            <h6>
              <a
                rel="noopener noreferrer"
                href="https://https://www.google.com/maps/https://www.google.com/maps/place/Philadelphia+Marriott+Old+City/@39.945598,-75.143375,18z/data=!4m8!3m7!1s0x89c6c89ab7451585:0x37bf386f4bc47164!5m2!4m1!1i2!8m2!3d39.9456717!4d-75.1431651?hl=en-US//Philadelphia+Marriott+Old+City,+One+Dock+St,+Philadelphia,+PA+19106/@39.945755,-75.143754,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c89ab7451585:0x37bf386f4bc47164!2m2!1d-75.1431652!2d39.9456718?hl=en-US.google.com/maps/dir//Philadelphia+Marriott+Old+City,+One+Dock+St,+Philadelphia,+PA+19106/@39.9471194,-75.1451675,17.9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c89ab7451585:0x37bf386f4bc47164!2m2!1d-75.1431652!2d39.9456718"
                target="_blank"
              >
                Directions to the hotel
              </a>
            </h6>
            <h6>
              <a
                rel="noopener noreferrer"
                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1597434499626&key=GRP&app=resvlink"
                target="_blank"
              >
                Book your room in our wedding block by September 4th!
              </a>
            </h6>
          </div>

          <Banner>
            For guests staying at the hotel, the <bold>only</bold> shuttle from the hotel will leave promptly at 3:30pm!  If you're not there you'll have to find alternative means of transportation.
          </Banner>

          <br />

          <div className="Hotel__middle-content">
            <Carousel
              slides={[<HotelImage1 />, <HotelImage2 />, <HotelImage3 />]}
            />
            <Map lat={39.945598} lng={-75.143375} />
          </div>
          <Description />
        </section>
      </LayoutConstrained>
    </Layout>
  )
}
