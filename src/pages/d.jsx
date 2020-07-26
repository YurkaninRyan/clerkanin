import React from "react"
import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"

import "./css/d.scss"

import { getFirebase } from "../firebase"

function useInvitedAnalytics() {
  const [analytics, setAnalytics] = React.useState({
    all: [],
    coming: [],
    notComing: [],
    plusOnes: [],
  })
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    getFirebase().then(async firebase => {
      const db = firebase.firestore()
      setLoading(true)
      const invited = await db.collection("invited").get()

      setLoading(false)

      const all = invited.docs
        .map(invitee => {
          return { id: invitee.id, ...invitee.data() }
        })
        .sort((a, b) => {
          const aLast = a.name.split(" ")[1]
          const bLast = b.name.split(" ")[1]
          let compare = 0

          aLast.split("").some((letter, index) => {
            if (letter > bLast[index]) {
              compare = 1
              return true
            } else if (letter < bLast[index]) {
              compare = -1
              return true
            }

            return false
          })

          if (compare === 0) {
            const aFirst = a.name.split(" ")[0]
            const bFirst = b.name.split(" ")[0]

            aFirst.split("").some((letter, index) => {
              if (letter > bFirst[index]) {
                compare = 1
                return true
              } else if (letter < bFirst[index]) {
                compare = -1
                return true
              }

              return false
            })
          }

          return compare
        })

      setAnalytics({
        all,
        coming: all.filter(invitee => invitee.coming === "yes"),
        notComing: all.filter(invitee => invitee.coming === "no"),
        hasntRSVPd: all.filter(invitee => invitee.coming === ""),
        plusOnes: all.filter(invitee => invitee.plusOne),
        virtual: all.filter(invitee => invitee.virtual),
        notVirtual: all.filter(invitee => !invitee.virtual)
      })
    })
  }, [])

  return {
    analytics,
    loading,
  }
}

function CollapseList(props) {
  return (
    <details className="d__section">
      <summary className="d__section-heading">
        {props.heading} [{props.invitees.length}]
      </summary>
      <ul className="d__section-list">
        {props.children
          ? props.children
          : props.invitees.map(invitee => (
            <li key={invitee.id}>{invitee.name}</li>
          ))}
      </ul>
    </details>
  )
}

CollapseList.defaultProps = {
  invitees: [],
}

export default function RSVP() {
  const { analytics, loading } = useInvitedAnalytics()
  const getUniqueEmails = (invitees) => [...new Set(invitees.filter(i => i).map(invitee => invitee.email))]
  const getInPerson = (invitees) => invitees.filter(i => !i.virtual);
  const getVirtual = (invitees) => invitees.filter(i => i.virtual)

  return (
    <Layout>
      <SEO title="Lists" />
      <LayoutConstrained>
        {loading ? (
          "Fetching people..."
        ) : (
            <>
              <CollapseList heading="[In Person] Who is coming (names)" invitees={getInPerson(analytics.coming)} />
              <CollapseList heading="[In Person] Who is coming (email list)" invitees={getInPerson(analytics.coming)}>
                {getUniqueEmails(analytics.coming).join(",")}
              </CollapseList>
              <CollapseList
                heading="[In Person] Who isn't coming"
                invitees={getInPerson(analytics.notComing)}
              />
              <CollapseList heading="[Virtual] Who is coming (names)" invitees={getVirtual(analytics.coming)} />
              <CollapseList heading="[Virtual] Who is coming (email list)" invitees={getVirtual(analytics.coming)}>
                {getUniqueEmails(getVirtual(analytics.coming)).join(",")}
              </CollapseList>
              <CollapseList
                heading="[Virtual] Who isn't coming"
                invitees={getVirtual(analytics.notComing)}
              />
              <CollapseList
                heading="Who hasn't RSVPd"
                invitees={analytics.hasntRSVPd}
              />
              <CollapseList heading="Invite List" invitees={analytics.all} />
              <CollapseList
                heading="Who is virtual"
                invitees={analytics.virtual}
              />
              <CollapseList
                heading="Who is not virtual"
                invitees={analytics.notVirtual}
              />
            </>
          )}
      </LayoutConstrained>
    </Layout>
  )
}
