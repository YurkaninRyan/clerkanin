import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import NavItems from "../NavItems/NavItems"
import "./Layout.scss"

export default function Layout(props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <main
          style={{
            display: "flex",
            minHeight: "100vh",
            background: "var(--white)",
          }}
        >
          <div style={{ flex: "0 0 auto" }}>
            <NavItems />
          </div>
          <div style={{ flex: 1 }}>{props.children}</div>
        </main>
      </div>
    </>
  )
}
