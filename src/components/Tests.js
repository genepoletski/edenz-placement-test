import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Test from '../containers/Test';

class Tests extends Component {
  componentWillReceiveProps(nextProps) {    
    // if (!nextProps.tests[ nextProps.currentTestId ] && nextProps.currentTestId) {
    //   this.props.fetchTest( nextProps.currentTestId );
    // }
  }

  onClickTest(evt) {
    const
      props = this.props,
      requestedTestId = evt.target.id;
    
    evt.preventDefault();
    if (requestedTestId !== props.currentTestId && !props.isStarted) {
      props.setCurrentTest(requestedTestId);
    }
  }
  
  render() {
    const props = this.props;
    
    // let Test;
    
    // switch (props.currentTestId) {
    //   case '1':
    //     Test = GrammarTest;
    //     break;
    //   case '2':
    //     Test = ListeningTest;
    //     break;
    //   default:
    //     Test = null;
    //     break;
    // }

    if (props.currentTestId) {
      return (<Test />);
    }

    return (
      <div className='tests'>
  
        <button
          id='1'
          className='button button--primary button--narrow-stacked'
          onClick={(evt)=>{this.onClickTest(evt)}}>
          Grammar Test
        </button>
  
        <button
          id="2"
          className='button button--primary button--narrow-stacked button--disabled'
          onClick={(evt)=>{this.onClickTest(evt)}}>
          Listening Test
        </button>
  
      </div>
    );
  }
  
}

Tests.propTypes = {
  currentTestId: PropTypes.string.isRequired,
  isStarted: PropTypes.bool.isRequired,
  onSetAnswer: PropTypes.func.isRequired
}

export default Tests;