//const QuestionDB = require("./QuestionDB");

module.exports = (QuestionDB) => {
  const express = require("express");
  const router = express.Router();
  
  /**** Routes ****/
  router.get('/questions', async (req, res) => {
    const questions = await QuestionDB.getQuestions();
    res.json(questions);
  });

  router.get('/questions/:id', async (req, res) => {
    const question = await QuestionDB.getQuestion(req.params.id);
    res.json(question);
  });
  router.post("/questions", async (req, res) =>{
    const addname = req.body.name;
    const addquestion = req.params.id;
    const question = await QuestionDB.newCreateQuestion(addname,addquestion);
    res.json(question);
  });
  router.post("/questions/:id/addanswers", async (req,res) =>{
    const addanswer = req.body.text;
    const questionId = req.params.id;
    const question = await QuestionDB.newCreateAnswer(addanswer,questionId);
    res.json(question);
  });

 // router.get('/questions/id', async (req, res) => {
  //  res.json({msg: `Hello, ${req.params.name}`});
  //});
 // router.post("/api/answers/:name/upvote",(req,res) =>{
 //   const questionName = req.params.name;
 //   questionInfo[question].upvotes +=1;
    
 //   res.status(200).send(`${questionName} has ${questionInfo[questionName].upvotes} upvotes`);
//});

 // router.post('/hello', (req, res) => res.send(`hello ${req.body.name}`));
  
  //router.get('/hello/:name', async (req, res) => {
    //res.json({msg: `Hello, ${req.params.name}`});
  //});

//router.post("/api/answers/:name/upvote",(req,res) =>{
//    const questionName = req.params.name;
//    questionInfo[question].upvotes +=1;
    
 //   res.status(200).send(`${questionName} has ${questionInfo[questionName].upvotes} upvotes`);
//});
//router.post("/question", async (req, res) =>{
  //const question = await QuestionDB.createQuestion()
  //res.json(question)

//});
//router.post("/questions/:id/addcomment", QuestionDB.addComment);

//router.post("/question", QuestionDB.createQuestion);
//router.post("/questions/:id", QuestionDB.addComment);



  return router
}