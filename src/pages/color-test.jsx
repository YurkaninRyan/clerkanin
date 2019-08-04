import React from "react"

export default function ColorTest() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <div style={{ flex: 1, background: "var(--moss)" }} />
      <div style={{ flex: 1, background: "var(--sage)" }} />
      <div style={{ flex: 1, background: "var(--rose)" }} />
      <div style={{ flex: 1, background: "var(--pink)" }} />
      <div style={{ flex: 1, background: "var(--white)" }} />
    </div>
  )
}
