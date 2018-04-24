import React, { Component } from 'react';



class Human extends Component {
  constructor(props) {
      super(props)
      this.state = {
        pictures: [],
      };
  }

  componentDidMount(){
    // For initial data
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then(results => {
      return results.json();
    }).then(data => {
      let pictures = data.results.map((pic, i) => {
        return(
          <div key={i} className="fetchClass">
            <div className="human-icon-container" style={{backgroundImage: "url(" + pic.picture.large + ")"}}></div>
            <p id="humanName">{String(pic.name.first).charAt(0).toUpperCase() + String(pic.name.first).slice(1)} {String(pic.name.last).charAt(0).toUpperCase() + String(pic.name.last).slice(1)}</p>

                <iframe title="Random Human Location" width="80%" height="75%" src={"https://maps.google.com/maps?q="+pic.location.city+"&t=&z=5&ie=UTF8&iwloc=&output=embed"} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>

          </div>
        )
      })
      this.setState({pictures: pictures});
    })
  }

  render() {

      return (
      <div className="App">
        <header className="App-header">
            <button onClick={this.fetchData}>GENERATE A HUMAN</button>
        </header>
        <div className="container center">


        </div>
            {this.state.pictures}

      </div>
    );
  }
}

export default Human;
