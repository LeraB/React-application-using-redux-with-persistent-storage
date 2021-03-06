import React, { Component } from 'react'
import update from 'immutability-helper'
import validator from '../../utils/validator'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import InputValidation from '../InputValidation/InputValidation'
import 'react-datepicker/dist/react-datepicker.css'

export default class testComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formEditableData: {
        name: {
          value: '',
          valid: true,
          validator: 'name',
          errorMessage: ''
        },
        email: {
          value: '',
          valid: true,
          validator: 'email',
          errorMessage: ''
        },
        phone: {
          value: '',
          valid: true,
          validator: 'phone',
          errorMessage: ''
        },
        dateOfBirth: {
          value: moment(),
          valid: true,
          validator: '',
          errorMessage: ''
        },
        postcode: {
          value: '',
          valid: true,
          validator: 'postcode',
          errorMessage: ''
        },
        address: {
          value: '',
          valid: true,
          validator: 'address',
          errorMessage: ''
        }
      },
      showDatePicker: false
    }
    this.formSubmit = this.formSubmit.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
    this.handleDate = this.handleDate.bind(this)
  }
    // get form data from redux
  componentWillMount () {
    let formEditableData = Object.assign({}, this.state.formEditableData)
    for (let key in this.props.formData) {
      formEditableData[key].value = this.props.formData[key]
    }
    this.setState({formEditableData})
  }
  componentWillReceiveProps (nextProps) {
    let formEditableData = Object.assign({}, this.state.formEditableData)
    for (let key in nextProps.formData) {
      formEditableData[key].value = nextProps.formData[key]
    }
    this.setState({formEditableData})
  }
    // change input value
  changeInputValue ({target: {value, name}}) {
    this.setState({
      formEditableData: update(this.state.formEditableData, {
        [name]: {
          value: {$set: value},
          valid: {$set: true}
        }
      })
    }, () => {
      this.props.saveFormData(name, value, 'form')
    })
  }
    // change date of birth
  handleDate (date) {
    this.setState({
      formEditableData: update(this.state.formEditableData, {
        dateOfBirth: {
          value: {$set: date}
        }
      })
    }, () => {
      this.props.saveFormData('dateOfBirth', date, 'form')
    })
  }
    // submit form data
  formSubmit (event) {
    event.preventDefault()
    if (this.props.isEditing) {
      validator(this.state.formEditableData)
                .then((res) => {
                  if (res === 'OK') {
                    this.props.changeStateProps('isEditing', false, 'form')
                  } else if (typeof res === 'object') {
                    this.setState({
                      formEditableData: res
                    })
                  } else {
                    console.log('error', res)
                  }
                })
    } else {
      this.props.changeStateProps('isEditing', true, 'form')
    }
  }
  render () {
    return (
      <div className='form-container'>
        <form>
          <label>Name: </label>
          <InputValidation
            isEditing={this.props.isEditing}
            valid={this.state.formEditableData.name.valid}
            errorMessage={this.state.formEditableData.name.errorMessage}
            name='name'
            placeholder='Name'
            value={this.props.formData.name}
            onChange={this.changeInputValue} />
          <label>Phone number: </label>
          <InputValidation
            isEditing={this.props.isEditing}
            valid={this.state.formEditableData.phone.valid}
            errorMessage={this.state.formEditableData.phone.errorMessage}
            name='phone'
            placeholder='Phone'
            value={this.props.formData.phone}
            onChange={this.changeInputValue} />
          <label>Email: </label>
          <InputValidation
            isEditing={this.props.isEditing}
            valid={this.state.formEditableData.email.valid}
            errorMessage={this.state.formEditableData.email.errorMessage}
            name='email'
            placeholder='Email'
            value={this.props.formData.email}
            onChange={this.changeInputValue} />
          <label>Address: </label>
          <InputValidation
            isEditing={this.props.isEditing}
            valid={this.state.formEditableData.address.valid}
            errorMessage={this.state.formEditableData.address.errorMessage}
            name='address'
            placeholder='Address'
            value={this.props.formData.address}
            onChange={this.changeInputValue} />
          <label>Postcode: </label>
          <InputValidation
            isEditing={this.props.isEditing}
            valid={this.state.formEditableData.postcode.valid}
            errorMessage={this.state.formEditableData.postcode.errorMessage}
            name='postcode'
            placeholder='Postcode'
            value={this.props.formData.postcode}
            onChange={this.changeInputValue} />
          <label>Date of birth: </label>
          <DatePicker
            value={moment(this.props.formData.dateOfBirth._d).format('L')}
            onChange={this.handleDate}
            disabled={!this.props.isEditing}
    />
          <button className='form-button' onClick={this.formSubmit}>{this.props.isEditing ? 'Save' : 'Edit'}</button>
        </form>
      </div>
    )
  }
}
