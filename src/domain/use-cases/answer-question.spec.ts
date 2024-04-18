import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("Create an Answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'New Answer.'
  })

  expect(answer.content).toEqual('New Answer');
})