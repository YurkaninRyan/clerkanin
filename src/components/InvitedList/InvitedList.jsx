import React from "react"
import { Button } from "../Form/Form"

import "./InvitedList.scss"

export default function InvitedList(props) {
  return (
    <ul className="InvitedList">
      {props.invited.map(invitee => (
        <li className="InvitedList__item" key={invitee.id}>
          {invitee.name}{" "}
          <Button onClick={() => props.onSelect(invitee)}>RSVP</Button>
        </li>
      ))}
    </ul>
  )
}
