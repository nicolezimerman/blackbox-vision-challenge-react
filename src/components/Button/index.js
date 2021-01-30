import './index.css';


function Button(props) {
    function clickMe(){
      console.log('click me');
    }
    return (
      <button className="button" onClick={clickMe}>
          {props.children}
      </button>
    );
  }
  
  export default Button;