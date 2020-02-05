import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import { getFirebase } from "../firebase"

export default function RSVP() {
  const [invited, setInvited] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const [name, setName] = React.useState("")

  // React.useEffect(() => {
  //   const lazyApp = import("firebase/app")
  //   const lazyDatabase = import("firebase/database")

  //   Promise.all([lazyApp, lazyDatabase]).then(async ([firebase]) => {
  //     const database = getFirebase(firebase).database()
  //     const value = await database.ref("invited").once("value")

  //     setLoading(false)
  //     setInvited(value.val())
  //   })
  // }, [])

  function onSubmit() {}

  return (
    <Layout>
      <SEO title="RSVP" />
      {/* {loading ? (
        "Loading..."
      ) : (
        <>
          <input
            placeholder="First and last name please!"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={setSpecificPerson} />
        </>
      )} */}
    </Layout>
  )
}
