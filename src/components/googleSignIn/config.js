import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCRpfZWgcxfCyHDZKQZnNpwyWZnoy5RUz0',
  authDomain: 'dashboard-eeb4c.firebaseapp.com',
  projectId: 'dashboard-eeb4c',
  storageBucket: 'dashboard-eeb4c.appspot.com',
  messagingSenderId: '708695582055',
  appId: '1:708695582055:web:113b62aef71acf731c3bc2',
  measurementId: 'G-1Z9SWE5M0N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}
