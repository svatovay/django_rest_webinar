import React from 'react'


const ProjectItem = ({project}) => {
  return (
    <tr>
      <td>
        {project.name}
      </td>
      <td>
        {project.repoLink}
      </td>
      <td>
        {project.users.map((user) => <p> {user} </p>)}
      </td>
      <td>
        {project.todos}
      </td>
    </tr>
  )
}


const ProjectList = ({projects}) => {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              Project Name
            </th>
            <th scope="col">
              Repo Link
            </th>
            <th scope="col">
              Users
            </th>
            <th scope="col">
              ToDos
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => <ProjectItem project={project} />)}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectList
