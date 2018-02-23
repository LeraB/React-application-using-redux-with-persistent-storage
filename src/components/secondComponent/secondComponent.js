import React, { Component } from 'react'

export default class Test extends Component {

  render () {
    return (
      <div className = "bla">
          <div>{this.props.testUser.name}</div>
          <div>{this.props.testUser.email}</div>
          <div>{this.props.testUser.phone}</div>
          <div>{this.props.testUser.address}</div>
          <div>{this.props.testUser.postcode}</div>
          <div>{this.props.testUser.dateofbirth}</div>
      </div>
    )
  }
}
