import { connect } from 'react-redux'
import { saveFormData, changeStateProps } from '../../actions'
import Form from './testComponent'

const mapStateToProps = (state, ownProps) => {
    return {
        formData: state.form.formData,
        isEditing: state.form.isEditing,
        ...ownProps
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveFormData: function (prop, value, reducer) {
            saveFormData(prop, value, reducer)(dispatch)
            return null
        },
        changeStateProps: function (prop, value, reducer) {
            changeStateProps(prop, value, reducer)(dispatch)
            return null
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
