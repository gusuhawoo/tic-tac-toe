import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="game">
      <div className="game-board"></div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* todo */}</ol>
      </div>
    </div>
  );
}

export default App;
