const config = {
  apiKey: process.env.GATSBY_CLERKANIN_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_CLERKANIN_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_CLERKANIN_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_CLERKANIN_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_CLERKANIN_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_CLERKANIN_FIREBASE_MESSAGING_SENDER_ID,
}

let firebaseInstance
export const getFirebase = async () => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  const firebase = await import("firebase/app")
  await import("firebase/firestore")

  firebase.initializeApp(config)
  firebaseInstance = firebase

  return firebase
}
