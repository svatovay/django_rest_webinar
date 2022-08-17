import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home.js';
import UserList from './components/User.js';
import ProjectList from './components/Project.js';
import ToDos from './components/ToDo.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';

import './App.css';
import './bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todos': [],
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/avocatodousers/')
    .then(response => {
      const users = response.data.results
      this.setState(
        {
          'users': users
        }
      )
    }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/projects/')
    .then(response => {
      const projects = response.data.results
      this.setState(
        {
          'projects': projects
        }
      )
    }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/todos/')
    .then(response => {
      const todos = response.data.results
      this.setState(
        {
          'todos': todos
        }
      )
    }).catch(error => console.log(error))

  }

  // componentDidMount() {
  //   axios.get('http://127.0.0.1:8000/api/projects/')
  //   .then(response => {
  //     const projects = response.data.results
  //     this.setState(
  //       {
  //         'projects': projects
  //       }
  //     )
  //   }).catch(error => console.log(error))
  // }

  // componentDidMount() {
  //   axios.get('http://127.0.0.1:8000/api/todos/')
  //   .then(response => {
  //     const todos = response.data.results
  //     this.setState(
  //       {
  //         'todos': todos
  //       }
  //     )
  //   }).catch(error => console.log(error))
  // }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/users' element={<UserList users={this.state.users} />} />
            <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
            <Route exact path='/todos' element={<ToDos todos={this.state.todos} />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App;
