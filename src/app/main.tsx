import { createRoot } from 'react-dom/client'
import { Main } from '../components/pages/Main/Main'
import { Login } from '../components/pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import { WithoutHeaderLayout } from '../components/layouts/WithoutHeaderLayout/WithoutHeaderLayout';

import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<WithoutHeaderLayout />}>
        <Route path='/login' element={<Login />} />
      </Route>
      <Route path='/' element={<Main />} />
    </Routes>
  </BrowserRouter>
)
