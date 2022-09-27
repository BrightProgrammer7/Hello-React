import hi from './hello-emoji.png';
import bye from './bye-emoji.jpg';
import './Hello.css';
import React, {useState} from 'react';


export function Hello(props) {
  const [react, setReact] = useState('App');
  function show() {
    setReact('React App');
  }
  function hide() {
    setReact('App');
  }

  return (
    <>
      <div className="Hello">
        <header className="Hello-header">
          <a
            className="Hello-link"
            target="_blank"
            rel="noopener noreferrer"
            href='http://localhost:3000'
          >
            Hello {props.hello}
          </a>
          <img src={hi} className="Hello-logo" alt="logo" />
          <button className='Hello-btn' onMouseOver={show} onMouseOut={hide}>
            Front-End Language
          </button>
          <p>
            First<code> {react} </code>to code.
          </p>
        </header>
      </div>
    </>
  );
}


export class Bye extends React.Component {
  state = {
    job: 'Programmer'
  }
  render() {
    return (
      <div className='Bye'>
        <footer className='Bye-footer'>
          <a
            className="Bye-link"
            target="_blank"
            rel="noopener noreferrer"
            href='http://localhost:3000'
          >
            Bye, {this.props.bye}
          </a>
          <img src={bye} className="Bye-logo" alt="logo" />
          <p>
            Be a Bright<code> {this.state.job} </code> & Smile.
          </p>
        </footer>
      </div> 
    );
  }
}

// export {Hello, Bye};