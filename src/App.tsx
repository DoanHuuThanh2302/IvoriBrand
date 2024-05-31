import { useEffect, useState } from 'react'
import liff from '@line/liff'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegistrationInformationForm from './page/session/registration/information-registration'

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
          <Route path='' element={<RegistrationInformationForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
