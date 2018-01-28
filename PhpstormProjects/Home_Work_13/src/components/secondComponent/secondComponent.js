import React, { Component } from 'react'

export default class Test extends Component {
  componentDidMount () {
    console.log('props in component', this.props)
  }
  render () {
    return (
      <div class="bla">
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
