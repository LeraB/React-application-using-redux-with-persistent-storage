import React, { Component } from 'react'

export default class InputWithValidation extends Component {
    render () {
        return (
            <div className='input-with-validation-container'>
            <div>
            <input
        className={`input ${!this.props.isEditing ? 'disabled' : ''}`}
        type='text'
        placeholder={this.props.placeholder}
        name={this.props.name}
        onChange={this.props.onChange}
        value={this.props.value}
        disabled={!this.props.isEditing} />
    <div className={!this.props.valid ? 'error-container' : 'hidden'}>
    <p className='error'>{this.props.errorMessage || ''}</p>
        </div>
        </div>
        </div>
    )
    }
}
