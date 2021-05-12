import { useState } from 'react';

import Header from './components/Header';
import Greeting from './components/Greeting';
import Button from './components/Button';
import Placeholder from './components/Placeholder';
// import Counter from '.components/Counter';
import './App.css';

function App() {

  // const [state, setState] = useState(initialState)

  // Output message when button is clicked
  const [name, setName] = useState("")
  

  const handleName = () => {
    setName("Hi, my name is Pia")
  }
  const handleSkills = () => {
    setName("I am a Frontend Developer")
  }

  

  return (
    
    <body>
      <div className="card ">
        <Header />
        
        <section className="card-body">
          <Greeting />
        
          <Placeholder  message={name} />

          <div className="btns">
            <Button clickHandler= {handleName} btntext={"Name"} />
            <Button clickHandler= {handleSkills} btntext={"Skills"} />
          </div>
        
          
        </section>

        <section className="likes">

    
          
          <button className="count" ><i className="fas fa-heart"></i></button>
          
        </section>

        <footer className="footer">
          <a className="links" target="_blank" href="https://twitter.com/FeenixRizn" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="links" target="_blank" href="https://github.com/Pia007" rel="noreferrer" >
            <i className="fab fa-github-square"></i>
          </a>
        </footer>
      </div>
    </body>  
  );
}

export default App;
