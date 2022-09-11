import React from 'react'

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {prj_name: '', link: '', users: props.users[0].id, todos: props.todos[0].id}
  }

  handleChange(event)
  {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    );
  }

  handleSubmit(event) {
    this.props.createProject(this.state.prj_name, this.state.link, this.state.users, this.state.todos)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="prj_name">
            prj_name
            <input type="text" className="form-control" name="prj_name"
            value={this.state.prj_name} onChange={(event) => this.handleChange(event)} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="link">
            link
            <input type="text" className="form-control" name="link"
            value={this.state.link} onChange={(event) => this.handleChange(event)} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="users">
            users
            <select name="users" className="form-control" onChange={(event) => this.handleChange(event)}>
            {this.props.users.map((item) => <option value={item.id}>{item.name}</option>)}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="todos">
            todos
            <select name="todos" className="form-control" onChange={(event) => this.handleChange(event)}>
            {this.props.todos.map((item) => <option value={item.id}>{item.name}</option>)}
            </select>
          </label>
        </div>
        <input type="submit" className="btn btn primary" value="Save" />
      </form>
    );
  }
}

export default ProjectForm
