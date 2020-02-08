import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { FaRing, FaCocktail, FaUtensils } from "react-icons/fa"
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
            date="4:30pm - 5:00pm"
            icon={<FaRing />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Ceremony</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="5:00pm - 6:00pm"
            icon={<FaCocktail />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Cocktail Hour</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="6:00pm - 7:00pm"
            icon={<FaUtensils />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Dinner</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="7:00pm - 8:00pm"
            icon={<GiPublicSpeaker />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">
              Speeches and First Dances
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="8:00pm - 11:00pm"
            icon={<GiMusicalNotes />}
            iconStyle={{ backgroundColor: "var(--linen)" }}
          >
            <h4 className="vertical-timeline-element-title">Partying!</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </LayoutConstrained>
    </Layout>
  )
}
