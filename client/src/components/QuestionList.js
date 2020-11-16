import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router';
import AddQuestion from './AddQuestion';
const API_URL = process.env.REACT_APP_API;

function QuestionList(props) {
  let questions = props.questions;

  let mapFunction = getid =>
    <Link to={`/questions/${getid._id}`} key={getid._id}>
      <li>{getid.name}</li>  
    </Link>;
    let questionList = questions.map(mapFunction);
    return (
      <div className="background-blue">
        <h1>Question Liist</h1>
        <ul key={questions._id}>{questionList}</ul>

              <AddQuestion path="/questions" addQuestion={props.addQuestion} ></AddQuestion> 
      </div>
    );
  }
  
  export default QuestionList;
  