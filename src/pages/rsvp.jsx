import React from "react"

import Layout, { LayoutConstrained } from "../components/Layout/Layout"
import SEO from "../components/seo"
import InvitedList from "../components/InvitedList/InvitedList"
import SelectedInvitee from "../components/SelectedInvitee/SelectedInvitee"
import { Form, Label, Button, Input } from "../components/Form/Form"
import ImageOfUsSmilingTogether from "../components/images/us/ImageOfUsSmilingTogether/ImageOfUsSmilingTogether"

import "./css/rsvp.scss"

import { getFirebase } from "../firebase"

function Searchbar(props) {
  return (
    <Form
      className="SearchBar"
      onSubmit={e => {
        e.preventDefault()
        props.onSubmit()
      }}
    >
      <Label htmlFor="search">Search By Name</Label>
      <Input
        value={props.value}
        placeholder="e.g. Michael Scott"
        onChange={props.onChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  )
}

export default function RSVP() {
  const [invited, setInvited] = React.useState([])
  const [filtered, setFiltered] = React.useState([])
  const [search, setSearch] = React.useState("")
  const [lastUsedSearch, setLastUsedSearch] = React.useState("")
  const [selected, setSelected] = React.useState(null)

  React.useEffect(() => {
    getFirebase().then(async firebase => {
      const db = firebase.firestore()
      const invited = await db.collection("invited").get()

      setInvited(
        invited.docs.map(invitee => {
          return { id: invitee.id, ...invitee.data() }
        })
      )
    })
  }, [])

  function searchInvited() {
    setLastUsedSearch(search)
    setSelected(null)
    setFiltered(
      invited.filter(invitee =>
        invitee.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }

  async function handleUpdates(updates) {
    const firebase = await getFirebase()
    const db = firebase.firestore()
    const inviteeRef = await db.collection("invited").doc(updates.id)

    db.runTransaction(transaction => {
      return transaction.get(inviteeRef).then(invitee =>
        transaction.update(inviteeRef, updates)
      );
    })
  }

  return (
    <Layout>
      <SEO title="RSVP" />
      <LayoutConstrained>
        <div className="RSVP">
          <div className="RSVP__form">
            {!selected && (
              <Searchbar
                value={search}
                onChange={e => setSearch(e.target.value)}
                onSubmit={searchInvited}
              />
            )}
            {selected ? (
              <SelectedInvitee
                invitee={selected}
                onBack={setSelected}
                onUpdate={handleUpdates}
              />
            ) : filtered.length ? (
              <InvitedList invited={filtered} onSelect={setSelected} />
            ) : Boolean(lastUsedSearch) ? (
              "No results found for that name"
            ) : null}
          </div>
          <div className="RSVP__image">
            <ImageOfUsSmilingTogether />
          </div>
        </div>
      </LayoutConstrained>
    </Layout>
  )
}
