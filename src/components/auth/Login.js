import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login', this.state.data)
      Auth.setToken(res.data.token)
      this.props.history.push('/profile')
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render() {
    return (
      <>
        <section className="loginsection"> 
          <div className="logincontainer">
            <div className="imagelayer">
              <img className="floating-image img-one" src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863928/Chow%20Vow/veggie_qm9yqp.png"></img>
              <img className="floating-image img-two" src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863925/Chow%20Vow/gyoza_kyiauw.png"></img>
              <img className="floating-image img-three" src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863927/Chow%20Vow/steak_bk3jbq.png"></img>
              <img className="floating-image img-three" src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863926/Chow%20Vow/pizza_irkqxb.png"></img>
            </div>
            <div className="logincolumns">
              <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter is-half-mobile has-text-centered">
                <h2 className="logintitle has-texted-centered">Login</h2>
                <div className="field">
                  <div className="control">
                    <input
                      className={`input is-rounded is-large is-primary ${this.state.error ? 'is-dark' : ''}`}
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="loginfield">
                  <br></br>
                  <div className="control">
                    <input
                      className={`input is-rounded is-large is-primary   ${this.state.error ? 'is-danger' : ''}`}
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.error && <small className="is-danger">{this.state.error}</small>}
                </div>
                <br></br>
                <button type="submit" className="button is-rounded is-large is-primary is-fullwidth">LETS CHOW</button>
              </form>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Login