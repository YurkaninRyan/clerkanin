import React from "react"

function InviteePlusOne(props) {
  return (
    <div>
      <label htmlFor="guest">
        You can bring a guest! Who are you bringing?
      </label>
      <input
        required
        id="guest"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default function SelectedInvitee(props) {
  const [guest, setGuest] = React.useState(props.invitee.plusOneName)
  const [coming, setComing] = React.useState(props.invitee.coming)

  const canBringGuestAndHasGivenOne = props.invitee.plusOne
    ? guest !== ""
    : true

  const canUpdate =
    canBringGuestAndHasGivenOne &&
    coming &&
    (guest !== props.invitee.plusOneName || coming !== props.invitee.coming)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        props.onUpdate({ ...props.invitee, coming, plusOneName: guest })
      }}
    >
      <div>
        <button onClick={() => props.onBack()}>back</button>
      </div>
      <div>Name: {props.invitee.name}</div>
      <div>
        <label htmlFor="coming">Can you come?</label>
        <select
          required
          id="coming"
          value={coming}
          onChange={e => setComing(e.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {props.invitee.plusOne && coming === "yes" && (
        <InviteePlusOne
          value={guest}
          onChange={e => setGuest(e.target.value)}
        />
      )}
      <button type="submit" disabled={!canUpdate}>
        Update
      </button>
    </form>
  )
}
