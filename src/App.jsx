import { useState } from 'react'
import './App.css'
import PersonalStatement from './components/PersonalStatement.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedIn } from '@fortawesome/free-brands-svg-icons';

//command a, command k, command f for auto formatiing hotkey 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-div'>
        <div className="group-1">
          <img className='headshot' src='/assets/sam.jpg' alt="Sam Bennett Headshot" />
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/sam-bennett-132611248/">
              <FontAwesomeIcon className='icons' icon={faLinkedin} />
            </a>
            <a target="_blank" href="https://github.com/sambennett04">
              <FontAwesomeIcon className='icons' icon={faGithub} />
            </a>

          </div>
          <h1 className="intro"> Hi, I'm Sam! </h1>
          <h2 className="intro">College of William & Mary</h2>
          <h2 className="intro">Class of 2026</h2>
          <h2>Major: Computer Science</h2>
        </div>
        <div className="group-2">
          <PersonalStatement />
        </div>
      </div>
    </>
  )
}

export default App
