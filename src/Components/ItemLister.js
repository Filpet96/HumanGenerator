import React, { Component } from 'react';


class ItemLister extends Component {
    constructor() {
    super();
    }

    render() {
    return(
      <p>
        {this.props.suggestion}
      </p>
      )
     }
    }
export default ItemLister;
