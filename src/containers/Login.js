import { connect } from 'react-redux';

import {
  addStudent,
  submitStudent,
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
    onAddStudent: data => {
      dispatch(addStudent(data));
    },
    onSubmitStudent: () => {
      dispatch(submitStudent());
    },
    onUpdateStudent: data => {
      dispatch(updateStudent(data));
    }
  }
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Connect;