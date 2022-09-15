import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {login: '', password: ''}
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    );
  }

  handleSubmit(event) {
    this.props.get_token(this.state.login, this.state.password)
    event.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <div className="modal-body p-5 pt-0">
          <form onSubmit={(event)=> this.handleSubmit(event)}>
            <div className="form-floating mb-3">
              <input className="form-control rounded-3" type="text" name="login" placeholder="login" value={this.state.login} onChange={(event) => this.handleChange(event)} />
              <input className="form-control rounded-3" type="text" name="password" placeholder="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
              <input className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm
