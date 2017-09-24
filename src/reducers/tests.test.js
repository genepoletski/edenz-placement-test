import types from '../actions/actionTypes';
import tests from './tests';

describe('Reducers: tests', () => {
    
  let initialState;
  
  beforeAll(() => {
    initialState = {
      '1': {
        isFetching: false,
        isComplete: true,
        test: {
          '1': {
            text: 'text',
            options: {}
          }
        }
      }
    }
  });

  it('should be a function', () => {
    expect(tests).toBeInstanceOf(Function);
  });

  it('should not change state if action is unknown', () => {
    expect( 
      tests(
        initialState,
        {
          type: 'unknown',
          payload: '1'
        }
      )
    )
    .toBe(initialState)
  });

  it('RECEIVE_TEST should properly notify that data received', () => {
    expect(
      tests(
        {
          '1': {
            isFetching: false,
            isComplete: true,
            test: {
              '1': {
                'text': 'question text 1',
                'options': {}
              },
              '2': {
                'text': 'question text 2',
                'option': {}
              }
            }
          },
          '2': {
            isFetching: true,
            test: {
              '1': {
                'text': 'question text 1',
                'options': {}
              },
              '2': {
                'text': 'question text 2',
                'option': {}
              }
            }
          }
        },
        {
          type: types.RECEIVE_TEST,
          payload: '2'
        }
      )
    )
    .toEqual(        {
      '1': {
        isFetching: false,
        isComplete: true,
        test: {
          '1': {
            'text': 'question text 1',
            'options': {}
          },
          '2': {
            'text': 'question text 2',
            'option': {}
          }
        }
      },
      '2': {
        isFetching: false,
        test: {
          '1': {
            'text': 'question text 1',
            'options': {}
          },
          '2': {
            'text': 'question text 2',
            'option': {}
          }
        }
      }
    })
  });

  it('REQUEST_TEST should request data properly', () => {
    expect(
      tests(
        {
          '1': {
            'isFetching': false,
            'isComplete': true,
            'test': {
              '1': {
                'text': 'question text 1',
                'options': {}
              },
              '2': {
                'text': 'question text 2',
                'options': {}
              }
            }
          },
          '2': {
            'isFetching': false,
            'test': {
              '1': {
                'text': 'question text 1',
                'options': {}
              }
            }
          }
        },
        {
          type: types.REQUEST_TEST,
          payload: '2'
        }
      )
    )
    .toEqual(
      {
        '1': {
          'isFetching': false,
          'isComplete': true,
          'test': {
            '1': {
              'text': 'question text 1',
              'options': {}
            },
            '2': {
              'text': 'question text 2',
              'options': {}
            }
          }
        },
        '2': {
          'isFetching': true,
          'test': {
            '1': {
              'text': 'question text 1',
              'options': {}
            }
          }
        }
      }
    )
  });

  it('SET_ANSWER should store selected answer properly', () => {
    expect(
      tests(
        {
          '1': {
            isFetching: false,
            isComplete: true,
            test: {
              '1': {
                'text': 'question text 1',
                'options': {}
              },
              '2': {
                'text': 'question text 2',
                'options': {}
              }
            },
            answers: {
              '1': 'a',
              '2': 'b'
            }
          },
          '2': {
            isFetching: false,
            isComplete: false,
            test: {
              '1': {
                'text': 'question text 1',
                'options': {}
              },
              '2': {
                'text': 'question text 2',
                'options': {}
              }
            },
            answers: {
              '1': 'a'
            }
          }
        },
        {
          type: types.SET_ANSWER,
          payload: {
            testId: '2',
            questionId: '2',
            answerId: 'b'
          }
        }
      )
    )
    .toEqual({
      '1': {
        isFetching: false,
        isComplete: true,
        test: {
          '1': {
            'text': 'question text 1',
            'options': {}
          },
          '2': {
            'text': 'question text 2',
            'options': {}
          }
        },
        answers: {
          '1': 'a',
          '2': 'b'
        }
      },
      '2': {
        isFetching: false,
        isComplete: false,
        test: {
          '1': {
            'text': 'question text 1',
            'options': {}
          },
          '2': {
            'text': 'question text 2',
            'options': {}
          }
        },
        answers: {
          '1': 'a',
          '2': 'b'
        }
      }
    })
  });

  it('SAVE_TEST should add essential data to received test and save it properly', () => {
    expect(
      tests(
        {
          '1': {
            'isComplete': true,
            'isFetching': false,
            'test': {
              '1': {
                text: 'question text 1',
                options: {}
              },
              '2': {
                text: 'questions text 2',
                options: {}
              }
            }
          },
          '2': {
            'isFetching': true
          }
        },
        {
        type: types.SAVE_TEST,
        payload: {
          id: '2',
          test: {
            '11': {
              text: 'question text 1',
              options: {}
            },
            '12': {
              text: 'question text 2',
              options: {}
            }
          }
        }
      })
    )
    .toEqual(        {
      '1': {
        'isComplete': true,
        'isFetching': false,
        'test': {
          '1': {
            text: 'question text 1',
            options: {}
          },
          '2': {
            text: 'questions text 2',
            options: {}
          }
        }
      },
      '2': {
        'isFetching': true,
        'test': {
          '11': {
            number: '1',
            text: 'question text 1',
            options: {}
          },
          '12': {
            number: '2',
            text: 'question text 2',
            options: {}
          }
        }
      }
    });
  });

});