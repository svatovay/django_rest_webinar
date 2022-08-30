import React from 'react'


const ToDo = ({todo}) => {
  return (
    <tr>
      <td>
        {todo.name}
      </td>
      <td>
        {todo.creator}
      </td>
      <td>
        {todo.project}
      </td>
      <td>
        {todo.description}
      </td>
      <td>
        {todo.createDate}
      </td>
      <td>
        {todo.updateDate}
      </td>
    </tr>
  )
}


const ToDos = ({todos}) => {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              ToDo
            </th>
            <th scope="col">
              Creator
            </th>
            <th scope="col">
              Project Name
            </th>
            <th scope="col">
              Description
            </th>
            <th scope="col">
              Create Date
            </th>
            <th scope="col">
              Update Date
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => <ToDo todo={todo} />)}
        </tbody>
      </table>
    </div>
  )
}

export default ToDos
