import './App.css';
import Button from './components/Button';
import Question from './components/Question';

function App() {
  return (
    <main className="App">
      <Question></Question>
      <nav className="answers"> 
        <Button>
          soy un children
        </Button>
        <Button>
          soy un children
        </Button>
        <Button>
          soy un children
        </Button>
        <Button>
          soy un children
        </Button>
      </nav>
     
    </main>
  );
}

export default App;
