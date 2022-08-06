import React from 'react'


const UserItem = ({user}) => {
  return (
    <tbody>
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
    </tbody>
  )
}


const UserList = ({users}) => {
  return (
    <div class="container">
      <table class="table table-striped">
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
        {users.map((user) => <UserItem user={user} />)}
      </table>
    </div>
  )
}

export default UserList
