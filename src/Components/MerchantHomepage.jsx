import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MerchantDashboard from './MerchantDashboard'
const MerchantHomepage = () => {
  return (
    <div className='merchanthome'>
      
      <Routes>
        <Route path="/" element={<MerchantDashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default MerchantHomepage
