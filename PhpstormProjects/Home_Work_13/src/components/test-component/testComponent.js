import React, { Component } from 'react';
import DatePicker from 'react-date-picker';


export default class Test extends Component {
  constructor (props) {
    super(props)
    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changePostcode = this.changePostcode.bind(this)
    this.onChange = this.onChange.bind(this)

  }

  componentDidMount () {
    console.log('props in component', this.props)
  }
  changeName ({target: {value}}) {
    this.props.changeStateProps('name', value)
  }
  changeEmail ({target: {value}}) {
    var emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);     
    if(emailValid){
    this.props.changeStateProps('email', value)}
    else {
          console.log('invalid value')
        }
  }
    changePhone ({target: {value}}) {
      var emailValid = value.match(/^\d[\d\(\)\ -]{8,11}\d$/);
      if(emailValid) {
        this.props.changeStateProps('phone', value)
      } else {
        if(value.length < 10)
          console.log('Enter the number completely!')
        }
      if(value.length > 13){
        console.log('Number is too large!')
    }}

    changeAddress ({target: {value}}) {
        this.props.changeStateProps('address', value)
    }
    changePostcode ({target: {value}}) {
        this.props.changeStateProps('postcode', value)
    }
    
  state = {
    date: new Date(),
  };

  onChange = date => this.props.changeStateProps({ date });

  render () {
    return (
      <div className="input-wraper">
          <div className="inputs">
            <input type='text' onChange={this.changeName} />
            <input type='email' size="13" onChange={this.changeEmail} />
            <input type='phone' pattern="^\d{3}-\d{3}-\d{2}-\d{2}$" className="user_phone" onChange={this.changePhone} />
            <input type='address' onChange={this.changeAddress} />
            <input type='postcode' onChange={this.changePostcode} />
        </div>
          <div className="date">
          <DatePicker
              type="date"
              onChange={this.onChange}
          />
              </div>
        </div>
    )
  }
}
