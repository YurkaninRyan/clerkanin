import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { FaRing, FaCocktail, FaUtensils, FaBus } from "react-icons/fa"
import { GiPublicSpeaker, GiMusicalNotes } from "react-icons/gi"

import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"

import "react-vertical-timeline-component/style.min.css"
import "./css/schedule.scss"

export default function Schedule() {
  return (
    <Layout>
      <SEO title="Schedule" />
      <LayoutConstrained>
        <h1>September 26th, 2020</h1>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            date="3:30pm"
            icon={<FaBus />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Shuttle Leaves</h4>
            <h6 className="vertical-timeline-element-subtitle">Hotel Guests Only </h6>
            <ul>
              <li>Shuttle will not wait for guests</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="4:00pm - 4:30pm"
            icon={<FaRing />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Ceremony</h4>
            <h6 className="vertical-timeline-element-subtitle">Get ready to cry!</h6>
            <ul>
              <li>Officiated by Pastor Michelle Kaufman</li>
              <li>Please wear your mask during ceremony, temperatures will be checked at the door</li>
              <li>Alana and Ryan will both be keeping their names</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="4:30pm - 5:30pm"
            icon={<FaCocktail />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Cocktail Hour</h4>
            <h6 className="vertical-timeline-element-subtitle">Time to mingle</h6>
            <ul>
              <li>Open bar with wine, beer, and two signature cocktails</li>
              <li>Appetizer stations will be available for picking</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="5:30pm - 6:30pm"
            icon={<FaUtensils />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Dinner</h4>
            <h6 className="vertical-timeline-element-subtitle">With all your Philly favorites</h6>
            <ul>
              <li>Served buffet style, we will have vegetarian options</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="6:30pm - 7:30pm"
            icon={<GiPublicSpeaker />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">
              Speeches and First Dances
            </h4>
            <h6 className="vertical-timeline-element-subtitle">More crying and laughing</h6>
            <ul>
              <li>Maid of Honor and Best Man will give speeches</li>
              <li>Father/Daughter and Mother/Son dances</li>
              <li>Alana and Ryan's first dance</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="7:30pm - 10:30pm"
            icon={<GiMusicalNotes />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Partying!</h4>
            <h6 className="vertical-timeline-element-subtitle">
              Time to celebrate
            </h6>
            <ul>
              <li>We promise the music will be good</li>
              <li>Sam Wagner offered to break dance</li>
              <li>Keith Clerkin will be playing the trumpet</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="10:45pm"
            icon={<FaBus />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Shuttle Returns</h4>
            <h6 className="vertical-timeline-element-subtitle">
              Hotel Guests Only
            </h6>
            <ul>
              <li>Shuttle will not wait for guests</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </LayoutConstrained>
    </Layout>
  )
}
