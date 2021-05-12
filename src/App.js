import { useState } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Button from './components/Button';
import Placeholder from './components/Placeholder';
import Likes from './components/Likes';
import Footer from './components/Footer';
import './App.css';

function App() {

  // const [state, setState] = useState(initialState)

  // Output message when button is clicked
  const [name, setName] = useState("")
  

  const handleName = () => {
    setName("Hi, my name is Pia!")
  }
  const handleSkills = () => {
    setName("I'm a Frontend Developer. Click the links for more info.")
  }

  // Counter
  const [counter, setCounter] = useState(0)
  
  
  const handleCount = () => {
    setCounter(counter + 1)
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
          <Placeholder  message={counter} />
          <Likes clickCounter= {handleCount} />
        </section>

        <Footer />
      </div>
    </body>  
  );
}

export default App;
