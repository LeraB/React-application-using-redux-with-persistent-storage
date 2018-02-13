import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import TestComponent from './testComponent'

const mapStateToProps = (state, ownProps) => {
   return {
    someUserName: state.main.name,
    isUserEqual: state.main.name === ownProps.testName,

    someUserEmail:  state.main.email,
    isUserEmail: state.main.email === ownProps.testEmail,

    someUserPhone:  state.main.phone,
    isUserPhone: state.main.phone === ownProps.testPhone,

    someUserAddress:  state.main.address,
    isUserAddress: state.main.address === ownProps.testAddress,

    someUserPostcode:  state.main.postcode,
    isUserPostcode: state.main.postcode === ownProps.testPostcode,

    someUserDate:  state.main.date,
    isUserDate: state.main.date === ownProps.testDate,
    
    ...ownProps
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStateProps: (prop, value) => {
      dispatch(changeStateProps(prop, value))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TestComponent)
