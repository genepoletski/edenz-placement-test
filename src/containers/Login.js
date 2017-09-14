import { connect } from 'react-redux';

import {
  addStudent,
  updateStudent
} from '../actions';

import Login from '../components/Login';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddStudent: personalInfo => {
      dispatch(
        addStudent({
          name: 'John Smith',
          email: 'johnsmith@mail.com'
        })
      )
    },
    onUpdateStudent: studentInfo => {
      dispatch(updateStudent(studentInfo));
    }
  }
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Connect;