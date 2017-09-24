import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';
import QuestionsLeft from '../containers/QuestionsLeft';
import VisibilityFilter from '../containers/VisiblityFilter';

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
        <div>Loading...</div>
      );
    }

    return (
      <form>
        <VisibilityFilter />
        { props.questions ? 
          <Questions
            onSetAnswer={(questionId, answerId) => this.handleSetAnswer(questionId, answerId)}
            questions={props.questions} />
          : '' }
        <div>
          {/*<QuestionsLeft />*/}
          <span>eye</span>
          <button
            className='pure-button pure-button-primary'>submit</button>
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