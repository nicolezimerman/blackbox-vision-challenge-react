import './index.css';


function Button(props) {
    return (
      <button className="button" onClick={() => props.checkAnswer(props.children)} value={props.children}>
          {props.children}
      </button>
    );
  }
  
  export default Button;