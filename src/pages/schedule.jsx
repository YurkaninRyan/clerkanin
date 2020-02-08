import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

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
          <VerticalTimelineElement date="4:30pm - 5:00pm">
            <h3 className="vertical-timeline-element-title">Ceremony</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement date="5:00pm - 6:00pm">
            <h3 className="vertical-timeline-element-title">Cocktail Hour</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement date="6:00pm - 7:00pm">
            <h3 className="vertical-timeline-element-title">Dinner</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement date="7:00pm - 8:00pm">
            <h3 className="vertical-timeline-element-title">
              Speeches and First Dances
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement date="8:00pm - 11:00pm">
            <h3 className="vertical-timeline-element-title">Partying!</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </LayoutConstrained>
    </Layout>
  )
}
