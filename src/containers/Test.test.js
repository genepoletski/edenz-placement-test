import constants from '../constants';
import {
  getVisibleQuestions
} from './Test.js';

describe('Containers: Test.js', () => {
  describe('getVisibleQuestions()', () => {
    const
      questions = {
        '1': 'question1',
        '2': 'question2',
        '3': 'question3'
      },
      answers = {
        '1': 'a'
      };

    it('should provide full list properly if has no answers yet', () => {
      expect( getVisibleQuestions( questions, {}, constants.QUESTIONS_SHOW_ALL ) )
      .toEqual(questions);
    });

    it('should provide full list properly if has answers', () => {
      expect( getVisibleQuestions( questions, answers, constants.QUESTIONS_SHOW_ALL ) )
      .toEqual(questions);
    });

    it('should provide unanswered questions properly', () => {
      expect( getVisibleQuestions( questions, answers, constants.QUESTIONS_SHOW_UNANSWERED ) )
      .toEqual({
        '2': 'question2',
        '3': 'question3'
      });
    });
  });
});