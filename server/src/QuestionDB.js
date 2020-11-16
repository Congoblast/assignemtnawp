module.exports = (mongoose) => {
    const QuestionSchema = new mongoose.Schema({
      name: String,
      answerName: String,
      answer: [{text:String}]  
    });
const questionModel = mongoose.model("questionmarken", QuestionSchema);

const questionPost = require("./model");

async function getQuestions(){
    try {
        return await questionModel.find();
      } catch (error) {
        console.error("getQuestion:", error.message);
        return {};
      }
}
async function getQuestion(id) {
  try {
    return await questionModel.findById(id);
  } catch (error) {
    console.error("getQuestion:", error.message);
    return {};
  }
}
async function newCreateQuestion(name){
  let question = new questionModel({
    name: name,
    answer:[]
  });
  return question.save()
}

async function newCreateAnswer(answer, questionId){
  const question = await getQuestion(questionId);

  let createAnswer={
    text: answer
  };
  question.answer.push(createAnswer);
  return question.save()
};

async function getAnswer(id){
  try {
      return await questionModel.findById(id);
    } catch (error) {
      console.error("getanswer:", error.message);
      return {};
    }
}
//async function getAnswers(){
  //  try {
    //    return await questionPost.find();
      //} catch (error) {
        //console.error("getanswer:", error.message);
        //return {};
      //}
//}
//async function getName(){
  //  try {
    //    return await questionPost.find();
      //} catch (error) {
        //console.error("getName:", error.message);
       // return {};
     // }
//}
//async function getAnswerName(){
  //  try {
    //    return await questionPost.find();
     // } catch (error) {
       // console.error("getanswername:", error.message);
       // return {};
     // }
//}


  async function createKitten(text) {
    let kitten = new kittenModel({name: text});
    return kitten.save();
  }

  async function addComment(req,res) {
    const body = req.body


    questionPost.findOne({ _id: req.params.id }, (err, question) => {
      
      question.name = body.name
        question.question = body.question
        question
        question
            .save()
            .then(() => {
                return res.status(200).json({
                    //success: true,
                    id: question._id,
                    message: "answer added",
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                   // message: 'Movie not updated!',
                })
            })
    })
};
//old code
  async function createQuestion (req,res) {
    const body = req.body

    
    if (!body) {
        return res.status(400).json({
            success: false,
            //error: 'no question',
        })
    }

    const question = new questionPost(body)
    if (!question) {
        return res.status(400).json({ success: false, error: err })
    }
   
    question
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: question._id,
                message: 'question created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'question not not created!',
            })
        })
}


    async function bootstrap(count = 10) {
        let l = (await getQuestions()).length;
        console.log("Kitten collection size:", l);
    
        if (l === 0) {
          let promises = [];
          for (let i = 0; i < count; i++) {
            let newKitten = new questionModel({name: `Kitten number ${i}`});
            promises.push(newKitten.save());
          }
          return Promise.all(promises);
        }
      }



   //   async function addComment(req, res){
   //     const body = req.body

  
//    questionPost.findOne({ _id: req.params.id }, (err, answer) => {
   //     if (err) {
   //         return res.status(404).json({
   //             err,
    //            message: "error",
   //         })
  //      }
   //    answer.name = body.name
   //    answer.answer = body.answer
        
   //     answer
   //     .save()
   //     .then(() => {
   //         return res.status(200).json({
   //             //success: true,
   //             id: question._id,
  //              message: "answer added",
    //        })
   //     })
   //     .catch(error => {
    //        return res.status(404).json({
    //            error,
               // message: 'Movie not updated!',
   //         })
   //     })
 //   })
     // }
    
    
    return{
    getAnswer,
    getQuestion,
    getQuestions,
    addComment,
    bootstrap,
    newCreateAnswer,
    newCreateQuestion,
    //getAnswerName,
    createQuestion
    
}    
}
