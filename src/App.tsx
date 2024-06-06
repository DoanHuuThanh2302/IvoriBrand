import { useEffect } from 'react'
import liff from '@line/liff'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import RegistrationInformationForm from './page/session/registration/information-registration'
import Login from './page/session/login/login'
import Home from './page/home'
import BidHistory from './page/bid-history'
import MyPage from './page/my-page'
import ChangeInformation from './page/change-information'
import ChangeUserInformation from './page/change-information/user-information'
import ChangeLoginInformation from './page/change-information/login-information'
import ChangeShippingAddressRegistration from './page/change-information/shipping-address-registration'
import ProductList from './page/product-list'
import ProductPage from './page/product-page'
import ProductRegister from './page/admin/product-register'
import Setting from './page/admin/setting'
import AdminProductList from './page/admin/product-list'
import AdminProductPage from './page/admin/product-page'
import Dashboard from './page/dashboard'

function App() {
  const [token] = useCookies(['token'])
  const [user] = useCookies(['user'])

  useEffect(() => {}, [token['token']])

  // useEffect(() => {
  //   liff.init({
  //     liffId: import.meta.env.VITE_LIFF_ID,
  //   })
  // })

  return (
    <>
      {user['user'] ? (
        <div className='App'>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/bid-history' element={<BidHistory />} />
              <Route path='/my-page' element={<MyPage />} />
              <Route
                path='/change-information'
                element={<ChangeInformation />}
              />
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
              <Route path='/product-list' element={<ProductList />} />
              <Route path='/product-page' element={<ProductPage />} />
              <Route
                path='/admin/product-register'
                element={<ProductRegister />}
              />
              <Route path='/admin/setting' element={<Setting />} />
              <Route
                path='/admin/product-list'
                element={<AdminProductList />}
              />
              <Route
                path='/admin/product-page'
                element={<AdminProductPage />}
              />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<RegistrationInformationForm />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      )}
    </>
  )
}

export default App
