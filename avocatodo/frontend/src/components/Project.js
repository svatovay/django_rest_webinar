import React from 'react'
import {Link} from 'react-router-dom'


const ProjectItem = ({project, deleteProject}) => {
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
        {project.todos.map((todo) => <p> {todo} </p>)}
      </td>
      <td>
        <button  onClick={() => deleteProject(project.id)} type='button'>
          Delete
        </button>
      </td>
    </tr>
  )
}


const ProjectList = ({projects, deleteProject}) => {
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
            <th scope="col">
              Delete Project
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
        </tbody>
      </table>
      <Link to='/projects/create'>Create</Link>
    </div>
  )
}

export default ProjectList
