import { useEffect } from 'react'
import liff from '@line/liff'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegistrationInformationForm from './page/session/registration/information-registration'
import Login from './page/session/login/login'
import Dashboard from './page/dashboard'
import BidHistory from './page/bid-history'
import MyPage from './page/my-page'
import ChangeInformation from './page/change-information'
import ChangeUserInformation from './page/change-information/user-information'
import ChangeLoginInformation from './page/change-information/login-information'
import ChangeShippingAddressRegistration from './page/change-information/shipping-address-registration'
import ProductList from './page/product-list'

function App() {
  useEffect(() => {
    liff.init({
      liffId: import.meta.env.VITE_LIFF_ID,
    })
  })

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<RegistrationInformationForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bid-history' element={<BidHistory />} />
          <Route path='/my-page' element={<MyPage />} />
          <Route path='/change-information' element={<ChangeInformation />} />
          <Route
            path='/change-information/user-information'
            element={<ChangeUserInformation />}
          />
          <Route
            path='/change-information/login-information'
            element={<ChangeLoginInformation />}
          />
          <Route
            path='/change-information/shipping-address-registration'
            element={<ChangeShippingAddressRegistration />}
          />
          <Route
            path='/change-information/shipping-address-registration'
            element={<ChangeShippingAddressRegistration />}
          />
          <Route path='/product-list' element={<ProductList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
