import {Component} from 'react'
import {signInWithPopup} from 'firebase/auth'
import {FcGoogle} from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'
import Home from '../Home'
import './index.css'
import {auth, provider} from './config'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    email: null,
  }

  emailUndefined = () => {
    this.setState({email: null})
  }

  submitFormForLogin = e => {
    e.preventDefault()
    const {username, password} = this.state
    if (username === '' && password === '') {
      this.setState({errorMsg: 'Enter valid user details'})
    } else if (username !== 'mounik') {
      this.setState({errorMsg: "Username doesn't exist"})
    } else if (username === 'mounik' && password !== 'hjerhfwbf') {
      this.setState({errorMsg: "Password doesn't match"})
    }
  }

  signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(data => {
      console.log(data.user.email)
      this.setState({email: data.user.email})
      localStorage.setItem('email', data.user.email)
    })
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          className="password-input-field"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          className="username-input-field"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {errorMsg, email} = this.state
    console.log(email)
    const errorMsgClass =
      errorMsg === '' ? 'error-msg-hidden' : 'error-msg-show'
    if (email !== null) {
      return <Home emailUndefined={this.emailUndefined} />
    }
    return (
      <div className="login-page-main-container">
        <div className="dashboard-title-container">
          <h1 className="title-name">Board.</h1>
        </div>
        <div className="login-form-container">
          <div>
            <h1>Sign In</h1>
            <p>Sign In To Your Account</p>
            <button
              type="button"
              className="sign-in-options"
              onClick={this.signInWithGoogle}
            >
              <FcGoogle className="signin-icon" />
              <span>Sign in with Google</span>
            </button>
            <button type="button" className="sign-in-options" disabled>
              <FaApple className="signin-icon" />
              <span>Sign in with Apple</span>
            </button>
            <form
              className="main-login-form"
              onSubmit={this.submitFormForLogin}
              id="loginForm"
              name="form"
              autoComplete="given-name"
            >
              <div className="input-container">
                {this.renderUsernameField()}
              </div>
              <div className="input-container">
                {this.renderPasswordField()}
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
              <p className={errorMsgClass}>{errorMsg}</p>
            </form>
            <p>
              Doesn&apos;t have an account?
              <span>
                <button
                  className="register-now"
                  type="button"
                  onClick={this.signInWithGoogle}
                >
                  Register now
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
