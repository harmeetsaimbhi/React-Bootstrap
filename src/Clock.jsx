import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes:0,
      seconds:0
    }
}

  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline),1000);
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));


    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }


  render() {
    return (
      <div className="App">

        <Grid>
          <Row className="show-grid">
            <Col bsSize='large' md={3}><code>{this.state.days} days</code></Col>
            <Col md={3}><code>{this.state.hours} hours</code></Col>
            <Col md={3}><code>{this.state.minutes} minutes</code></Col>
            <Col md={3}><code>{this.state.seconds} seconds</code></Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default Clock;
