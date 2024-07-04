import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

const AuthRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/login'/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
    </Suspense>
  )
}

export default AuthRoutes