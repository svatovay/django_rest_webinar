import React from 'react'


const UserItem = ({user}) => {
  return (
    <tr>
      <td>
        {user.username}
      </td>
      <td>
        {user.first_name}
      </td>
      <td>
        {user.last_name}
      </td>
      <td>
        {user.email}
      </td>
    </tr>
  )
}


const UserList = ({users}) => {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              Username
            </th>
            <th scope="col">
              First Name
            </th>
            <th scope="col">
              Last Name
            </th>
            <th scope="col">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => <UserItem user={user} />)}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
