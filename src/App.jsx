import React from 'react'
import Header from './Components/Header'
import Pages from './Components/Pages'
import { BrowserRouter as Router } from 'react-router-dom'
// import { DataProvider } from './GlobalState'
import Footer from './Components/Footer'
import '@coreui/coreui/dist/css/coreui.min.css'


const App = () => {
  return (
    // <DataProvider>
    <Router>
    <div className='App'>
      <Header/>
      <Pages/>
      <Footer/>
    </div>
    </Router>
    // </DataProvider>
  )
}
export default App