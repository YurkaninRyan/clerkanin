import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import classnames from "classnames"

import NavItems from "../NavItems/NavItems"

import "./Layout.scss"

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
    if (isMobile || window.innerWidth > 750) {
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
        <span>Clerkanin Wedding</span>
      </header>
      <main className="Layout__main">
        <div className={cnNav}>
          <NavItems />
        </div>
        <div className="Layout__main-content">
          <div className="Layout__main-padder">{props.children}</div>
        </div>
      </main>
    </div>
  )
}
