import React, { Component } from 'react'
import update from 'immutability-helper'
import validator from '../../utils/validator'
import DatePicker from 'react-datepicker'
import moment from 'moment'

// Components
import InputWithValidation from '../InputWithValidation/InputWithValidation'

// Styles
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
    componentWillMount () {
        let formEditableData = Object.assign({}, this.state.formEditableData)
        // get form data from redux
        for (let key in this.props.formData) {
            formEditableData[key].value = this.props.formData[key]
        }
        this.setState({formEditableData})
    }
    componentWillReceiveProps (nextProps) {
        let formEditableData = Object.assign({}, this.state.formEditableData)
        // get form data from redux
        for (let key in nextProps.formData) {
            formEditableData[key].value = nextProps.formData[key]
        }
        this.setState({formEditableData})
    }
    changeInputValue ({target: {value, name}}) {
        // change input value and set valid true
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
    handleDate (date) {
        // change date of birth
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
    formSubmit (event) {
        // Submit form data
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
        <InputWithValidation
        isEditing={this.props.isEditing}
        valid={this.state.formEditableData.name.valid}
        errorMessage={this.state.formEditableData.name.errorMessage}
        name='name'
        placeholder='Name'
        value={this.props.formData.name}
        onChange={this.changeInputValue} />
    <label>Phone number: </label>
        <InputWithValidation
        isEditing={this.props.isEditing}
        valid={this.state.formEditableData.phone.valid}
        errorMessage={this.state.formEditableData.phone.errorMessage}
        name='phone'
        placeholder='Phone'
        value={this.props.formData.phone}
        onChange={this.changeInputValue} />
    <label>Email: </label>
        <InputWithValidation
        isEditing={this.props.isEditing}
        valid={this.state.formEditableData.email.valid}
        errorMessage={this.state.formEditableData.email.errorMessage}
        name='email'
        placeholder='Email'
        value={this.props.formData.email}
        onChange={this.changeInputValue} />
    <label>Address: </label>
        <InputWithValidation
        isEditing={this.props.isEditing}
        valid={this.state.formEditableData.address.valid}
        errorMessage={this.state.formEditableData.address.errorMessage}
        name='address'
        placeholder='Address'
        value={this.props.formData.address}
        onChange={this.changeInputValue} />
    <label>Postcode: </label>
        <InputWithValidation
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
