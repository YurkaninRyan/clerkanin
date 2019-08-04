import React from "react"
import { Link } from "gatsby"

import "./NavItems.scss"

function ActiveLink(props) {
  return (
    <Link activeClassName="is-active" {...props}>
      {props.children}
    </Link>
  )
}

export default function NavItems() {
  return (
    <ul className="NavItems" role="navigation">
      <li className="NavItems__item">
        <ActiveLink to="/">Our Story</ActiveLink>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/venue/">Venue</ActiveLink>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/schedule/">Schedule</ActiveLink>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/accommodations/">Accommodations</ActiveLink>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/registry/">Registry</ActiveLink>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/rsvp/">RSVP</ActiveLink>
      </li>
    </ul>
  )
}
