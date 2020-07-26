import React from "react"

import {
  Form,
  Select,
  Input,
  Label,
  Button,
  SecondaryButton,
} from "../Form/Form"

import Banner from "../Banner/Banner";

import "./SelectedInvitee.scss"

export default function SelectedInvitee(props) {
  const [guest, setGuest] = React.useState(props.invitee.plusOneName || "")
  const [coming, setComing] = React.useState(props.invitee.coming)
  const [email, setEmail] = React.useState(props.invitee.email || "")
  const [updated, setUpdated] = React.useState(false)

  const canBringGuestAndHasGivenOne =
    props.invitee.plusOne && coming === "yes" ? guest !== "" : true


  const canUpdate =
    canBringGuestAndHasGivenOne &&
    (guest !== props.invitee.plusOneName || coming !== props.invitee.coming)

  return (
    <Form
      onSubmit={() => {
        setUpdated(true)
        props.onUpdate({ ...props.invitee, coming, email, plusOneName: guest })
      }}
    >
      <Banner>
        {props.invitee.virtual ?
          "We will be sending out links for the virtual wedding, please check your email the day of the wedding." :
          "If you don't feel comfortable coming due to COVID-19 please email alana.clerkin@gmail.com, and we'll get you the virtual link the day of the wedding"
        }
      </Banner>
      <br />
      <div className="SelectedInvitee__form-spacer">
        <Label htmlFor="name">Name</Label>
        <div id="name">{props.invitee.name}</div>
      </div>

      <div className="SelectedInvitee__form-spacer">
        <Label htmlFor="coming">Can you come?</Label>
        <Select
          required
          id="coming"
          value={coming}
          onChange={e => {
            setComing(e.target.value)
            if (e.target.value === "no") {
              setGuest("")
            }
          }}
        >
          <option value=""></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </div>
      <div className="SelectedInvitee__form-spacer">
        <Label htmlFor="email">Your Email (for updates)</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      {props.invitee.plusOne && (
        <div className="SelectedInvitee__form-spacer">
          <Label htmlFor="guest">Name of Plus One</Label>
          <Input
            required
            disabled={coming === "no"}
            id="guest"
            value={guest}
            onChange={e => setGuest(e.target.value)}
          />
        </div>
      )}
      <div className="SelectedInvitee__buttons">
        <SecondaryButton onClick={() => props.onBack()}>Back</SecondaryButton>
        <Button type="submit" disabled={!canUpdate}>
          {updated ? "Updated!" : "Update"}
        </Button>
      </div>
    </Form>
  )
}
