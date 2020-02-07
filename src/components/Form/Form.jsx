import React from "react"

import "./Form.scss"

export function Form(props) {
  return (
    <form
      {...props}
      className="Form"
      onSubmit={e => {
        e.preventDefault()
        props.onSubmit(e)
      }}
    >
      {props.children}
    </form>
  )
}

export function Label(props) {
  return (
    <label {...props} className="Form__label">
      {props.children}
    </label>
  )
}

export function Input(props) {
  return <input {...props} className="Form__input" />
}

export function Button(props) {
  return (
    <button {...props} className="Form__button">
      {props.children}
    </button>
  )
}
