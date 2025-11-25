import './App.css'
import { Routes, Route } from 'react-router-dom';
import QueueVariable from './components/QueueVariable'
import HomePage from './components/HomePage'
import MailTemplate from './components/MailTemplate'

function App() {

  return (
    <Routes> 
      <Route path='/' element={<HomePage/>}></Route>
     <Route path='/queueVariables' element={<QueueVariable/>}></Route>
     <Route path='/mailTemplate' element={<MailTemplate/>}></Route>
    </Routes>
  )
}

export default App
