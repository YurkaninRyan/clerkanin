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
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/venue/">Venue</ActiveLink>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/schedule/">Schedule</ActiveLink>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/hotel/">Hotel</ActiveLink>
      </li>
      <li className="NavItems__item">
        <a
          rel="noopener noreferrer"
          target="_registry"
          href="https://www.target.com/gift-registry/giftgiver?registryId=68244336781d462fb92a2c4c2e0f1f1b&lnk=registry_custom_url"
        >
          Registry
        </a>
      </li>
      <li className="NavItems__item">
        <ActiveLink to="/rsvp/">RSVP</ActiveLink>
      </li>
    </ul>
  )
}
