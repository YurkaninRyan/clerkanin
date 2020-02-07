import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import InvitedList from "../components/InvitedList/InvitedList"
import SelectedInvitee from "../components/SelectedInvitee/SelectedInvitee"

import { getFirebase } from "../firebase"

function useInvitedSearch() {
  const [search, setSearch] = React.useState("")
  const [invited, setInvited] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const searching = Boolean(search)

  React.useEffect(() => {
    getFirebase().then(async firebase => {
      const db = firebase.firestore()
      setLoading(true)
      const invited = await db.collection("invited").get()

      setLoading(false)
      setInvited(
        invited.docs.map(invitee => {
          return { id: invitee.id, ...invitee.data() }
        })
      )
    })
  }, [])

  const onChange = e => {
    setSearch(e.target.value)
  }

  const inputAttributes = {
    value: search,
    onChange: onChange,
  }

  return {
    inputAttributes,
    invited: searching
      ? invited.filter(invitee =>
          invitee.name.toLowerCase().includes(search.toLowerCase())
        )
      : [],
    loading,
    searching,
  }
}

export default function RSVP() {
  const { inputAttributes, invited, loading, searching } = useInvitedSearch()
  const [selected, setSelected] = React.useState(null)

  async function handleUpdates(updates) {
    const firebase = await getFirebase()
    const db = firebase.firestore()
    const inviteeRef = await db.collection("invited").doc(updates.id)

    db.runTransaction(transaction => {
      return transaction.get(inviteeRef).then(invitee => {
        transaction.update(inviteeRef, updates)
      })
    })
  }

  return (
    <Layout>
      <SEO title="RSVP" />
      <input placeholder="First and last name please!" {...inputAttributes} />
      {loading ? (
        "Loading..."
      ) : selected ? (
        <SelectedInvitee
          invitee={selected}
          onBack={setSelected}
          onUpdate={handleUpdates}
        />
      ) : invited.length ? (
        <InvitedList invited={invited} onSelect={setSelected} />
      ) : searching ? (
        "No Results Found. :("
      ) : null}
    </Layout>
  )
}
