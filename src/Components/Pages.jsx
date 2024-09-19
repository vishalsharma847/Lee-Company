import React from 'react'
// import Product from './products/Product'
// import Login from './login/Login'
// import Register from './login/Register'
// import Cart from './cart/Cart'
import { Route, Routes } from 'react-router-dom'
import Home from '/src/Components/mainpages/home/Home'
import Services from '/src/Components/mainpages/services/Services'
import Contact from '/src/Components/mainpages/contact/Contact'
import Faq from '/src/Components/mainpages/faq/Faq'
import About from '/src/Components/mainpages/about/About'
import CompleteRelocation from '/src/Components/mainpages/services/completeRelocation/CompleteRelocation'
import PersonalVehicle from '/src/Components/mainpages/services/personalVehicleTransport/PersonalVehicle'
import PackingServices from '/src/Components/mainpages/services/packingServices/PackingServices'
import TransportVehicle from '/src/Components/mainpages/services/transportVehicle/TransportVehicle'
import Warehousing from '/src/Components/mainpages/services/warehousing/Warehousing'
import TermsAndCondition from '/src/Components/additionalpages/termsAndConditions/TermsAndCondition'
import PrivacyPolicy from '/src/Components/additionalpages/privacyPolicy/PrivacyPolicy'
import Workarea from '/src/Components/additionalpages/workArea/Workarea'
// import DetailProduct from './utils/DetailProducts/DetailProduct'
const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/about' element={<About place="Delhi"/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services/complete-relocation' element={<CompleteRelocation/>}/>
      <Route path='/services/packing-services' element={<PackingServices/>}/>
      <Route path='/services/transport-vehicle' element={<TransportVehicle/>}/>
      <Route path='/services/warehousing' element={<Warehousing/>}/>
      <Route path='/services/personal-vehicle-relocation' element={<PersonalVehicle/>}/>
      <Route path='/leehome/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/leehome/terms-and-condition' element={<TermsAndCondition/>}/>
      <Route path='/workarea/delhi-ncr' element={<Workarea place='Delhi-NCR'/>}/>
      <Route path='/workarea/kolkata' element={<Workarea place='Kolkata'/>}/>
      <Route path='/workarea/siliguri' element={<Workarea place='Siliguri'/>}/>
      <Route path='/workarea/lucknow' element={<Workarea place='Lucknow'/>}/>
      <Route path='/workarea/hyderabad' element={<Workarea place='Hyderabad'/>}/>
      <Route path='/workarea/patna' element={<Workarea place='Patna'/>}/>
      <Route path='/workarea/meerut' element={<Workarea place='Meerut'/>}/>
      <Route path='/workarea/bangalore' element={<Workarea place='Bangalore'/>}/>
      <Route path='/workarea/bhopal' element={<Workarea place='Bhopal'/>}/>
      <Route path='/workarea/ahmedabad' element={<Workarea place='Ahmedabad'/>}/>
      <Route path='/workarea/chandigarh' element={<Workarea place='Chandigarh'/>}/>
      <Route path='/workarea/mumbai' element={<Workarea place='Mumbai'/>}/>
      <Route path='/workarea/pune' element={<Workarea place='Pune'/>}/>
      <Route path='/workarea/rohtak' element={<Workarea place='Rohtak'/>}/>
      <Route path='/workarea/ranchi' element={<Workarea place='Ranchi'/>}/>
      <Route path='/workarea/jaipur' element={<Workarea place='Jaipur'/>}/>
      <Route path='/workarea/dehradun' element={<Workarea place='Dehradun'/>}/>
      <Route path='/workarea/agra' element={<Workarea place='Agra'/>}/>
      <Route path='/workarea/indore' element={<Workarea place='Indore'/>}/>
    </Routes>
  )
}

export default Pages
