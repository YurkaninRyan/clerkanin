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

export function Select(props) {
  return <select {...props} className="Form__select" />
}

export function Button(props) {
  return (
    <button {...props} className="Form__button">
      {props.children}
    </button>
  )
}

export function SecondaryButton(props) {
  return (
    <button {...props} className="Form__secondary-button">
      {props.children}
    </button>
  )
}
