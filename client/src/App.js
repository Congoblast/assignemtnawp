import React, {useEffect, useState} from 'react';
import {Router} from '@reach/router';
import QuestionList from './components/QuestionList';
import QuestionPage from './components/QuestionPage';
import "./cssb/css/bootstrap.css";
import "./styles.css";
const API_URL = process.env.REACT_APP_API;
function App() {
  const [question, setData] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, [question]); 

  function getQuestion(id){
    const questionlist = question.find(ids => ids._id === id);
    return questionlist;
  }

  async function addComment(text, questionId) {
    const url = `${API_URL}/questions/${questionId}/addanswers`;
    const response = await fetch(url, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text }),
    });
    const data = await response.json()
    console.log("answer", data)
  }
  return (
    <>
  <Router>
    <QuestionList path="/" questions={question}>{question._id}</QuestionList>
    <QuestionPage path="/questions/:id" addComment={addComment} getQuestion={getQuestion} ></QuestionPage>
    </Router>

    </>
  );
}

export default App;
