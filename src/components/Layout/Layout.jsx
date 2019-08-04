import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import classnames from "classnames"
import { Link } from "gatsby"

import NavItems from "../NavItems/NavItems"

import "./Layout.scss"

function ActiveLink(props) {
  return (
    <Link activeClassName="is-active" {...props}>
      {props.children}
    </Link>
  )
}

export default function Layout(props) {
  const [isMobile, setIsMobile] = React.useState(false)
  const [isNavOpen, setNavOpen] = React.useState(false)
  const cnMain = classnames("Layout", {
    "is-mobile": isMobile,
  })
  const cnIcon = classnames("Layout__header-hamburger", {
    "is-active": isNavOpen,
  })
  const cnNav = classnames("Layout__main-nav", {
    "is-open": isNavOpen,
  })

  React.useEffect(() => {
    if (isMobile || window.innerWidth > 1010) {
      return
    }

    setIsMobile(true)
  })

  return (
    <div className={cnMain}>
      <header className="Layout__header">
        {isMobile && (
          <span className={cnIcon} onClick={() => setNavOpen(!isNavOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        )}
        {!isMobile && (
          <ul className="Layout__header-items is-left">
            <li className="Layout__header-item">
              <ActiveLink to="/">Home</ActiveLink>
            </li>

            <li className="Layout__header-item">
              <ActiveLink to="/venue/">Venue</ActiveLink>
            </li>
            <li className="Layout__header-item">
              <ActiveLink to="/accommodations/">Accommodations</ActiveLink>
            </li>
          </ul>
        )}
        <span className="Layout__header-name">Ryan & Alana</span>
        {!isMobile && (
          <ul className="Layout__header-items">
            <li className="Layout__header-item">
              <ActiveLink to="/schedule/">Schedule</ActiveLink>
            </li>
            <li className="Layout__header-item">
              <ActiveLink to="/registry/">Registry</ActiveLink>
            </li>
            <li className="Layout__header-item">
              <ActiveLink to="/our-story/">Our Story</ActiveLink>
            </li>
          </ul>
        )}
      </header>
      <main className="Layout__main">
        {isMobile && (
          <div className={cnNav}>
            <NavItems />
          </div>
        )}
        <div className="Layout__main-content">
          <div className="Layout__main-padder">{props.children}</div>
        </div>
      </main>
    </div>
  )
}
