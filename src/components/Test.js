import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestControl from '../containers/TestControl';
import PaginatorMessage from '../containers/PaginatorMessage';
import Questions from './Questions';

class Test extends Component {
  componentDidMount() {
    const props = this.props;
    if (Object.keys(props.questions).length === 0) {
      props.fetchTest(props.testId);
    }
  }

  handleSetAnswer(questionId, answerId) {
    const props = this.props;
    props.handleSetAnswer(props.testId, questionId, answerId);
  }

  render() {
    const props = this.props;

    if (props.isFetching) {
      return (
        <div className='test'>Loading...</div>
      );
    }

    return (
      <form className='test'>
        <PaginatorMessage />
        { props.questions ? 
          <Questions
            onSetAnswer={(questionId, answerId) => this.handleSetAnswer(questionId, answerId)}
            questions={props.questions}
            answers={props.answers} />
          : '' }
        <div className='test__control control'>
          <div className='control__container'>
            <TestControl />
          </div>
        </div>
      </form>
    );
  }
}

Test.propTypes = {
  testId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool,
  questions: PropTypes.object.isRequired
}

export default Test;