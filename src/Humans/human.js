import React, { Component } from 'react';



class Human extends Component {
  constructor() {
super();
this.state = {
  pictures: [],
};
  }



  componentDidMount() {

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
      <div className="container2">
<div className="container1">
{this.state.pictures}
</div>
      </div>
    )
  }
}

export default Human;
