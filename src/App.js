import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react'; 
import * as math from 'mathjs';

let history = [];
function App() {

  const append = (pressed) => {
    setCurrentString((currentString) => {
      return (currentString + pressed);
    });
  }

  const [currentString, setCurrentString] = useState("");
  const [answer, setAnswer] = useState("");

  // const [history, setHistory] = useState([]);

  const clearText = () => {
    setCurrentString("");
    setAnswer("");
  }

  const clearLast = () => {
    if(!currentString.length == 0){
      setCurrentString(currentString.substring(0,currentString.length - 1));
    }
  }

  const findResult = () => {
    const b = math.evaluate(currentString);
    setAnswer(b);

    if(history.length == 10){
      history.shift();
      history.push(b);
    }
    else{
      history.push(b);
    }

    console.log(history);

    setCurrentString("");
  }

  return (
    <div className="App">
      <div className='InputBox'>
        <Input text = {currentString} result = {answer}/>
      </div>
      <div className='row'>
        <Button title = 'C' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={clearText}/>
        <Button title = '(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = ')' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = ',' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '%' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '/' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
      </div>
      <div className='row'>
        <Button title = 'sqrt(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'pow(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'asin(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '7' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '8' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '9' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '*' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        
      </div>
      <div className='row'>
        <Button title = 'tan(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'log(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'atan(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '4' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '5' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '6' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '-' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        
      </div>
      <div className='row'>
        <Button title = 'sin(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'cos(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'acos(' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '1' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '2' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '3' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '+' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
      </div>
      <div className='row'>
        <Button title = '.' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '0' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '=' color = '#000' currentStringColor = '#ffffff' handleClick={findResult}/>
        <Button title = 'del' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={clearLast}/>
      </div>
      <div>
        <p>Last 10 Transactions</p>
        {history.map((num) => {
          return <li key = {num}>
            {num}
          </li>
        })}
      </div>
    </div>
  );
}

export default App;
