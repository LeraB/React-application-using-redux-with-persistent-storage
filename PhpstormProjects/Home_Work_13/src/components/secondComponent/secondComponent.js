import React, { Component } from 'react'

export default class Test extends Component {

  render () {
    return (
      <div className = "bla">
          <p> Name: {this.props.someUserName} </p>
          <p> Email: {this.props.someUserEmail} </p>
          <p> Phone: {this.props.someUserPhone} </p>
          <p> Address: {this.props.someUserAddress} </p>
          <p> Postcode: {this.props.someUserPostcode} </p>
          <p> Date: {this.props.someUserDate} </p>
      </div>
    )
  }
}
