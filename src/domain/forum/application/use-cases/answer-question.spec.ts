import { AnswerQuestionUseCase } from './answer-question';
import { AnswersRepository } from '../repositories/answers-repository';
import { Answer } from '../../enterprise/entities/answer';

const fakeAnswersRepository: AnswersRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: async (answer: Answer) => {},
};
test('Create an Answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'New Answer',
  });

  expect(answer.content).toEqual('New Answer');
});