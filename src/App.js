import React, { Component } from 'react'
import logo from './assets/logo.svg'
import './App.css'
import './index.scss'

// Components
import testComponent from 'components/test-component/testComponentContainer'

class App extends Component {
    render () {
        return (
            <div className='App'>
            <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React</h1>
        </header>
        <testComponent />
        </div>
    )
    }
}
export default App

