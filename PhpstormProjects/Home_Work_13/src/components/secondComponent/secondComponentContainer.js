import { connect } from 'react-redux'
import SecondComponent from './secondComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    someUserName: state.main.name,
    someUserEmail: state.main.email,
    someUserPhone:  state.main.phone,
    someUserAddress:  state.main.address,
    someUserPostcode:  state.main.postcode,
    someUserDate:  state.main.date
  }
}

export default connect(
  mapStateToProps)(SecondComponent)
