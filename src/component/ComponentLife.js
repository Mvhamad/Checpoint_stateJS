import React, { Component } from "react";

let compteur = null;

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count :0,
    };
    }
  
    componentDidMount() {
        compteur = setInterval(() => {
            this.setState(prevState => ({
                count : prevState.count + 1, 
            }))
        }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(compteur);
    }
  
    render() {
      return (
        <div>
          <h1>Counter : {this.state.count} Seconds</h1>
        </div>
      );
    }
  }
  
  
export default Clock

