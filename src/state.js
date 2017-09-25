const state = {
  test: {
    currentTestId: '1',
    visibilityFilter: 'QUESTIONS_SHOW_ALL'
  },
  tests: {
    1: {
      isFetching: false,
      isComplete: false,
      test: {
        1: {
          text: 'question1Text',
          options: {
            a: 'option1Text',
            b: 'option2Text',
            c: 'option3Text'
          }
        }
      },
      answers: {
        '1': 'a'
      }
    }
  },
  user: {
    email: 'john@snow.nor',
    name: 'john snow',
    isLogged: true
  }

}