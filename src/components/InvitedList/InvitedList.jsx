import React from "react"

export default function InvitedList(props) {
  return (
    <ul>
      {props.invited.map(invitee => (
        <li key={invitee.id}>
          {invitee.name}{" "}
          <button onClick={() => props.onSelect(invitee)}>select</button>
        </li>
      ))}
    </ul>
  )
}
