import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  
  function handleShowQuestions(questions) {
    setQuestions([...questions]);
  }

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          setQuestions={handleShowQuestions}
        />
      )}
    </main>
  );
}

export default App; 