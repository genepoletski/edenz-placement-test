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
      <form className='test'>
        
        { props.questions ? 
          <Questions
            onSetAnswer={(questionId, answerId) => this.handleSetAnswer(questionId, answerId)}
            questions={props.questions}
            answers={props.answers} />
          : '' }
        <div className='test__control control pure-g'>
          <div className='pure-u-1 control__container'>
            <div className='control__item control__item--left'>
              {/*<QuestionsLeft />*/}
              <span><span className='questions-left__number'>45</span>left</span>
            </div>
            <div className='control__item control__item--center'>
              <VisibilityFilter />
            </div>
            <div className='control__item control__item--right'>
              <button className='pure-button pure-button-primary test__sumit'>submit</button>
            </div>
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