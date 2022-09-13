import React from 'react'

class ToDoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {todo_name: '', desc: '', project: props.projects[0].id, user: props.users[0].id}
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
    this.props.createToDo(this.state.todo_name, this.state.desc, this.state.project, this.state.user)
    console.log(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="todo_name">
            todo_name
          </label>
          <input type="text" className="form-control" name="todo_name"
          value={this.state.todo_name} onChange={(event) => this.handleChange(event)} />
        </div>
        <div className="form-group">
          <label htmlFor="desc">
            desription
          </label>
          <input type="text" className="form-control" name="desc"
          value={this.state.desc} onChange={(event) => this.handleChange(event)} />
        </div>
        <div className="form-group">
          <label htmlFor="project">
            project
          </label>
          <select name="project" className="form-control" onChange={(event) => this.handleChange(event)}>
          {this.props.projects.map((item) => <option value={item.id}>{item.name}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user">
            user
          </label>
          <select name="user" className="form-control" onChange={(event) => this.handleChange(event)}>
          {this.props.users.map((item) => <option value={item.id}>{item.username}</option>)}
          </select>
        </div>
        <input type="submit" className="btn btn primary" value="Save" />
      </form>
    );
  }
}

export default ToDoForm
