import { useState} from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import './App.css'
import "./Home.css"
import Home from './Home'
import PersonalPage from './PersonalPage'
import MessageContext from './MessageContext'

function App() {
 const [message, setMessage] = useState();
  return (
    <div>
      <nav>
        <Link className='link' to='/'>Homepage</Link>
        <Link className='link' to='/personalPage'>PersonalPage</Link>
      </nav>
      <MessageContext.Provider value={[message,setMessage]}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/personalPage' element={<PersonalPage value={message}/>}></Route>
      </Routes>
      </MessageContext.Provider>
    </div>
  )
}

export default App;
