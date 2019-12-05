import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as userService from '../../services/user-service';
import * as calendarService from '../../services/calendar-service';

import './styles.css';


export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      day: '1',
      hour: '1:00',
      calendar: []
    }
  }

  async componentWillMount() {
    this.setState({ calendar: await calendarService.listEvents() });
  }

  async createEvent() {
    const {name, day, hour} = this.state;
    calendarService.createEvent(name, day, hour);
    this.setState({ calendar: await calendarService.listEvents() });
    document.location.reload();
  }

  logout() {
    userService.logout();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderDays = () => {
    const days = [];
    for(let i = 1; i < 8; i++) {
      days.push(<option value={i+''}>{i}</option>);
    }
    return days;
  }

  renderHours = () => {
    const hours = [];
    for (let i = 1; i < 25; i++) {
      hours.push( <option value={i + ':00'}>{i}:00</option> )
    }
    return hours;
  }

  renderHeaderTable() {
    const header = [];
    const week = ['Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const shortWeek = ['Mon', 'Tue', 'We', 'Thur', 'Fri', 'Sat', 'sun'];

    for (let i = 1; i < 8; i++) {
      header.push(<th>
                    <span className="day">{i}</span>
                    <span className="long">{week[i-1]}</span>
                    <span className="short">{shortWeek[i-1]}</span>
                  </th>)
    }
    return header;
  }

  renderLineTable() {
    const table = [];
    
    for(let j = 1; j < 25; j++) {
      let rowTable = [];
      rowTable.push(<td className="hour"><span>{j}:00</span></td>);
        
      for(let i = 1; i < 8; i++) {
          rowTable.push(<td>{this.state.calendar.map(rs => {
                          if(rs.hour == j+':00' && rs.day === i+'') {
                            return <li>{rs.name}</li>}
                          }
                          )}
                        </td>);
      }
      table.push(<tr>{rowTable}</tr>);
    }
    return table;
  }
  

  render() {

    return (
        <div className="calendar-page">
          <h1 className="title-main">Calendar</h1>
          <div className="top-box">
            <h2>Create event</h2>

            <div className="input-box">

              <label className="form-span">Name</label>
              <input type="text" placeholder="Event name" name="name" value={this.state.name} onChange={this.handleChange}/>

              <label className="form-span">Day</label>
              <select className="form-control" value={this.state.day} name="day" onChange={this.handleChange}>
                  {this.renderDays()}
              </select>

              <label className="form-span">Hour</label>
              <select className="form-control" value={this.state.hour} name="hour" onChange={this.handleChange}>
                {this.renderHours()}
              </select>
              
            </div>

            <div className="button-box">
              <button className="create-button" onClick={()=>this.createEvent()}>
                  <span className="button-text">Create Event</span>
              </button>

              <Link to="./">
                <button onClick={()=>this.logout} className="create-button">
                    <span className="button-text">Logout</span>
                </button>
              </Link>
            </div>

          </div>

            <h2>Events list</h2>

            <table>
            <thead>
                <tr>
                    <th></th>
                    {this.renderHeaderTable()}
                </tr>
            </thead>

            <tbody>
                {this.renderLineTable()}
            </tbody>
          </table>

        </div>
    );
  }    
}