import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react'; 
import * as math from 'mathjs';

let history = [];
function App2() {

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
        <Button title = '%' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '/' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
      </div>
      <div className='row'>
        <Button title = '7' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '8' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '9' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '*' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        
      </div>
      <div className='row'>
        <Button title = '4' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '5' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '6' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '-' color = '#C5C6D0' currentStringColor = '#ffffff' handleClick={append}/>
        
      </div>
      <div className='row'>
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

export default App2;
