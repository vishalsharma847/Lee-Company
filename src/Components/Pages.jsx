import React from 'react'
// import Product from './products/Product'
// import Login from './login/Login'
// import Register from './login/Register'
// import Cart from './cart/Cart'
import { Route, Routes } from 'react-router-dom'
import Home from './mainpages/home/Home'
import Services from './mainpages/services/Services'
import Contact from './mainpages/contact/Contact'
import Faq from './mainpages/faq/Faq'
import About from './mainpages/about/About'
import CompleteRelocation from './mainpages/services/completeRelocation/CompleteRelocation'
import PersonalVehicle from './mainpages/services/personalVehicleTransport/PersonalVehicle'
import PackingServices from './mainpages/services/packingServices/PackingServices'
import TransportVehicle from './mainpages/services/transportVehicle/TransportVehicle'
import Warehousing from './mainpages/services/warehousing/Warehousing'
import TermsAndCondition from './additionalpages/termsAndConditions/TermsAndCondition'
import PrivacyPolicy from './additionalpages/privacyPolicy/PrivacyPolicy'
import Workarea from './additionalpages/workArea/Workarea'
// import DetailProduct from './utils/DetailProducts/DetailProduct'
const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services/complete-relocation' element={<CompleteRelocation/>}/>
      <Route path='/services/packing-services' element={<PackingServices/>}/>
      <Route path='/services/transport-vehicle' element={<TransportVehicle/>}/>
      <Route path='/services/warehousing' element={<Warehousing/>}/>
      <Route path='/services/personal-vehicle-relocation' element={<PersonalVehicle/>}/>
      <Route path='/leehome/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/leehome/terms-and-condition' element={<TermsAndCondition/>}/>
      <Route path='/workarea/' element={<Workarea/>}/>
    </Routes>
  )
}

export default Pages
