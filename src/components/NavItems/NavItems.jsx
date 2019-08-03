import React from "react"
import { Link } from "gatsby"

import "./NavItems.scss"

export default function NavItems() {
  return (
    <ul className="NavItems" role="navigation">
      <li className="NavItems__item">
        <Link to="/venue">Venue</Link>
      </li>
      <li className="NavItems__item">
        <Link to="/schedule">Schedule</Link>
      </li>
      <li className="NavItems__item">
        <Link to="/accomadations">Accomadations</Link>
      </li>
      <li className="NavItems__item">
        <Link to="/registry">Registry</Link>
      </li>
      <li className="NavItems__item">
        <Link to="our-story">Our Story</Link>
      </li>
    </ul>
  )
}
