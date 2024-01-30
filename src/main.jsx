import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import RecoveryPage from './components/routes/RecoveryPage.jsx'
import ContactPage from './components/routes/ContactPage.jsx'
import CloudPage from './components/routes/CloudPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/recovery' element={<RecoveryPage/>}/>
    <Route path='/cloud' element={<CloudPage/>} />
      <Route path='/contact' element={<ContactPage/>}/>
     </Routes>
    </Router>
    
  </React.StrictMode>,
)
