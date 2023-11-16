import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((data) => setQuestions([...data]));
  }, []);

  function handleDelete(itemId) {
    const updatedItems = questions.filter((question) => {
      if (question.id !== itemId) return true;
      else return false;
    });
    setQuestions(updatedItems);
  }

  function handleAnswerChange(newQuestion) {
    const updatedItems = questions.map((question) => {
      if (question.id === newQuestion.id) return newQuestion;
      else return question;
    });
    setQuestions(updatedItems);
    console.log(questions);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return (
            <QuestionItem
              key={question.id}
              question={question}
              onDelete={handleDelete}
              onAnswerChange={handleAnswerChange}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;