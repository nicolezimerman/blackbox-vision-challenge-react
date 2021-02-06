import './index.css';


function Question(props) {
  const {category,difficulty,question} = props.question;
    return (
     
      <section className="question">
         {console.log(props)}
        <header>{props.number + 1}/{props.total}</header>
        {question}
        <footer>{category} - {difficulty}</footer>
      </section>
    );
  }
  
  export default Question;