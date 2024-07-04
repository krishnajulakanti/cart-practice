import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import MainRoutes from './routes/MainRoutes';
import AuthRoutes from './routes/AuthRoutes';

function App() {

  const user = true;

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/*' element={user ? <MainRoutes/> : <Navigate replace to='/auth/login'/>}/>
            <Route path='/auth/*' element={<AuthRoutes />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
