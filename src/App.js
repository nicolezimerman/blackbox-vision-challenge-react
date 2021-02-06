import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Question from './components/Question';
import Loader from './components/Loader';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("pending");
  const question = questions[currentQuestion];


  useEffect(() => {
      //Codigo que se ejecuta solo al montar
      getQuestions();
  }, []);

  async function getQuestions() {
    const data = await fetch("https://opentdb.com/api.php?amount=10");
    const json = await data.json();
    setQuestions(json.results);
    setStatus('resolved')
  }

  function checkAnswer(answer){
    //ver como agregar loader
    if(question.correct_answer === answer){
      if(question.type === 'multiple'){
        setPoints((points) => points + 10);
      }else{
        setPoints((points) => points + 5);
      }
    }
    if((currentQuestion + 1) == questions.length){
      setStatus('finished');
    }else{
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);  
    }
  }

  async function startAgain(){
    setStatus("pending");
    setCurrentQuestion(0);
    setPoints(0);
    await getQuestions();

  }
  
  if(status === "pending"){
    return(
      <Loader></Loader>
    )
  }else if(status === "finished"){
    return(
      <div className="container">
        <div className="score">Your total score is {points}</div>
        <button className="start-again" onClick={startAgain}>Start again</button>
      </div>
    )
  }
  return (  
    <main className="App">
      <Question question={question} number={currentQuestion} total={questions.length}></Question>
      <nav className="answers"> 
      {[...question.incorrect_answers, question.correct_answer].map((answer) =>{
        return <Button key={answer} checkAnswer={checkAnswer}>{answer}</Button>
      })}  
      </nav>
    </main>
  );
}

export default App;
