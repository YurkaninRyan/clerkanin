import React from "react"

import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"

export default function Schedule() {
  return (
    <Layout>
      <LayoutConstrained>
        <SEO title="Schedule" />
        schedule
      </LayoutConstrained>
    </Layout>
  )
}
