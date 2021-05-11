
import Header from './components/Header';
import './App.css';

function App() {
  return (
    
    <body>
      <div className="card ">
        <Header />
        
        <section className="c-body">
          <h2 className="greeting">
            Hi!
          </h2>
          <h2 className="message">
            Placeholder
          </h2>
          <button className="btn my-name">Name</button>
          <button className="btn my-skills">Skills</button>  
        </section>

        <section className="likes">
          <span className="count">0 <i className="fas fa-heart"></i></span>
          
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
