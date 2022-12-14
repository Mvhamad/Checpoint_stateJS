import React, { Component } from 'react';
import Clock from './component/ComponentLife';
import './App.css';

const imgstyle = { height: 150, width: 150, marginRight: 10, borderRadius: 20 }


class App extends Component {
  // STATE
  state = {
    person: {
      fullname: 'Yami Sukehiro',
      occupation: 'Mage knight',
      biography: 'Eccentric knight',
      tof: <img style={imgstyle} src="https://www.nautiljon.com/images/perso/00/38/sukehiro_yami_17283.jpg" alt="" />,
    },
    show: true
  };

  // button action
  handleClick = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>

        <div className="timer">
          <Clock />
        </div>

        {this.state.show && (
          <div className="all">
            <div className="container">
              <div className="head">
                <div>
                  <img style={{ height: 50, width: 52, marginRight: 10 }} src="https://1001symboles.net/images/trefle.jpg" alt="" />
                </div>
                <h3 style={{ color: '#FFD700' }}> C L O V E R K I N G D O M</h3>
              </div>
              <div className="profile">
                <div className="tof"> {this.state.person.tof} </div>
                <div className="inf">
                  <div className="fullname"> <b>Identity :</b> {this.state.person.fullname} </div>
                  <div className="job"> <b>Post :</b> {this.state.person.occupation}</div>
                  <div className='compagny'> <b>Compagny :</b> Black Bull</div>
                  <div className="biography"><b>Description :</b> {this.state.person.biography}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="button">
          <button onClick={this.handleClick}> <b>Hide/Show</b> </button>
        </div>

      </>
    );
  }
}

export default App;
