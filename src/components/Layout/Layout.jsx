import React from "react"
import { FaBars } from "react-icons/fa"
import classnames from "classnames"
import { Link } from "gatsby"
import Div100vh from "react-div-100vh"

import NavItems from "../NavItems/NavItems"

import "./Layout.scss"

function ActiveLink(props) {
  return (
    <Link activeClassName="is-active" {...props}>
      {props.children}
    </Link>
  )
}

function MobileHeader(props) {
  const cnIcon = classnames("Layout__header-hamburger", {
    "is-active": props.isActive,
  })

  return (
    <header className="Layout__header Layout__header--mobile">
      <button className={cnIcon} onClick={props.onClick}>
        <FaBars />
      </button>
      <span className="Layout__header-name">Ryan & Alana</span>
    </header>
  )
}

function DesktopHeader() {
  return (
    <header className="Layout__header Layout__header--desktop">
      <ul className="Layout__header-items is-left">
        <li className="Layout__header-item">
          <ActiveLink to="/">Home</ActiveLink>
        </li>

        <li className="Layout__header-item">
          <ActiveLink to="/venue/">Venue</ActiveLink>
        </li>
        <li className="Layout__header-item">
          <ActiveLink to="/hotel/">Hotel</ActiveLink>
        </li>
      </ul>
      <span className="Layout__header-name">Ryan & Alana</span>

      <ul className="Layout__header-items">
        <li className="Layout__header-item">
          <ActiveLink to="/schedule/">Schedule</ActiveLink>
        </li>
        <li className="Layout__header-item">
          <a
            rel="noopener noreferrer"
            target="_registry"
            href="https://www.target.com/gift-registry/giftgiver?registryId=68244336781d462fb92a2c4c2e0f1f1b&lnk=registry_custom_url"
          >
            Registry
          </a>
        </li>
        <li className="Layout__header-item">
          <ActiveLink to="/rsvp/">RSVP</ActiveLink>
        </li>
      </ul>
    </header>
  )
}

export default function Layout(props) {
  const [isNavOpen, setNavOpen] = React.useState(false)

  const cnNav = classnames("Layout__main-nav", {
    "is-open": isNavOpen,
  })

  return (
    <Div100vh className="Layout">
      <MobileHeader
        isActive={isNavOpen}
        onClick={() => setNavOpen(!isNavOpen)}
      />
      <DesktopHeader />
      <main className="Layout__main">
        <div className={cnNav}>
          <NavItems />
        </div>

        <div className="Layout__main-content">{props.children}</div>
      </main>
    </Div100vh>
  )
}

export function LayoutConstrained(props) {
  return <div className="Layout__main-padder">{props.children}</div>
}
