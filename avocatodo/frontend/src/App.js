import React from 'react';
import axios from 'axios';
import UserList from './components/User.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/avocatodousers/')
    .then(response => {
      const users = response.data
      this.setState(
        {
          'users': users
        }
      )
    }).catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        <Menu />
        <UserList users={this.state.users} />
        <Footer />
      </div>
    )
  }
}

export default App;


// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
