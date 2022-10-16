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
        <Button title = 'C' color = '#C8A951' currentStringColor = '#ffffff' handleClick={clearText}/>
        <Button title = '(' color = '#E39FF6' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = ')' color = '#E39FF6' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = ',' color = '#F9E076' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '%' color = '#F9E076' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '/' color = '#F9E076' currentStringColor = '#ffffff' handleClick={append}/>
      </div>
      <div className='row'>
        <Button title = 'sqrt(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'pow(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'asin(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '7' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '8' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '9' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '*' color = '#F9E076' currentStringColor = '#ffffff' handleClick={append}/>
        
      </div>
      <div className='row'>
        <Button title = 'tan(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'log(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'atan(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '4' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '5' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '6' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '-' color = '#F9E076' currentStringColor = '#ffffff' handleClick={append}/>
        
      </div>
      <div className='row'>
        <Button title = 'sin(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'cos(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = 'acos(' color = '#E3242B' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '1' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '2' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '3' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '+' color = '#F9E076' currentStringColor = '#ffffff' handleClick={append}/>
      </div>
      <div className='row'>
        <Button title = '.' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '0' color = '#41424C' currentStringColor = '#ffffff' handleClick={append}/>
        <Button title = '=' color = '#000' currentStringColor = '#ffffff' handleClick={findResult}/>
        <Button title = 'del' color = '#41424C' currentStringColor = '#ffffff' handleClick={clearLast}/>
      </div>
      <div>
      <p style={{fontSize: 24 , fontWeight: 'bold', textDecoration: 'underline', marginTop: '5%', marginBottom: '3%'}}>History</p>
        {history.map((num) => {
          return <li key = {num} style= {{fontSize: 18, fontWeight: 'bold', listStyle: 'none'}} >
            {num}
          </li>
        })}
      </div>
    </div>
  );
}

export default App;
