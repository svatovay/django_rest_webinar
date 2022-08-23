import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {BrowserRouter, Link,  Routes, Route} from 'react-router-dom';

import Home from './components/Home.js';
import LoginForm from './components/Auth.js';
import UserList from './components/User.js';
import ProjectList from './components/Project.js';
import ToDos from './components/ToDo.js';
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
      'token': ''
    }
  }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({'token': token}, () => this.load_data())
  }

  is_authenticated() {
    return this.state.token != ''
  }

  logout() {
    this.set_token('')
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({'token': token}, () => this.load_data())
  }

  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
    .then(response => {
      this.set_token(response.data['token'])
    }).catch(error => alert('Неверный логин или пароль'))
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated())
    {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/avocatodousers/', {headers})
    .then(response => {
      const users = response.data.results
      this.setState(
        {
          'users': users
        }
      )
    }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/projects/', {headers})
    .then(response => {
      const projects = response.data.results
      this.setState(
        {
          'projects': projects
        }
      )
    }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/todos/', {headers})
    .then(response => {
      const todos = response.data.results
      this.setState(
        {
          'todos': todos
        }
      )
    }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.get_token_from_storage()
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/users'>Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/projects'>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/todos'>ToDos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
              <li className="nav-item">
                {this.is_authenticated() ?
                  <button className="btn btn-primary" onClick={() => this.logout()}>Logout</button> :
                  <Link className="nav-link" to='/login'>Login</Link>
                }
              </li>
            </ul>
          </header>
        </div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/users' element={<UserList users={this.state.users} />} />
            <Route exact path='/projects' element={<ProjectList projects={this.state.projects} />} />
            <Route exact path='/todos' element={<ToDos todos={this.state.todos} />} />
            <Route exact path='/login' element={<LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App;
