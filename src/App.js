import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        pictures: [],
      };
  }

  componentDidMount(){
    // For initial data
    // this.fetchData();
  }

  fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then(results => {
      return results.json();
    }).then(data => {
      let pictures = data.results.map((pic, i) => {
        return(
          <div key={i}>
                <iframe title="Random Human Location" width="80%" height="400px" src={"https://maps.google.com/maps?q="+pic.location.city+"&t=&z=5&ie=UTF8&iwloc=&output=embed"} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </div>
        )
      })
      this.setState({pictures: pictures});
    })
  }

  render() {

      return (
        <div>
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to HumanGenerator</h1>
        </header>
        <div className="container center">
              <button onClick={this.fetchData}>GENERATE</button>
        </div>
            {this.state.pictures}

      </div>
      </div>
    );
  }
}
export default App;
