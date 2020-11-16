import React, {useEffect, useState} from 'react';
//import { Link } from "@reach/router";
import Addcomment from "./addCommnt"
//import addComment from "../components/addCommnt";
//const API_URL = process.env.REACT_APP_API;


function QuestionPage(props) {
  const id = props.id;
  //find the id from the url
    //const id2 = match.params.id;
    const data = props.getQuestion(id);

    //now send it further
    //const questions = data.find(questions =>questions._id ===id);
    let listofAnswers = data.answer.map(comment =>
      <li key={comment._id}>{comment.text}</li>
    );



return(
    <>
    <h1 className="text-center questionHeader">Question: {data.name}</h1>
    <p>answers:<ul>{listofAnswers}</ul></p>
   <Addcomment path="/" addComment={props.addComment} id={data._id}></Addcomment>
    </>
);
}
export default QuestionPage;