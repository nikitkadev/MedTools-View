import { createRoot } from 'react-dom/client'
import { Home } from '../components/pages/Home/Home'
import { Login } from '../components/pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import { WithoutHeaderLayout } from '../components/layouts/WithoutHeaderLayout/WithoutHeaderLayout';

import './styles/global.scss';
import { AppLayout } from '../components/layouts/AppLayout/AppLayout';
import { RControl } from '../components/pages/RControl/RControl';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<WithoutHeaderLayout />}>
        <Route path='/login' element={<Login />} />
      </Route>
      <Route element={<AppLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/rcontrol' element={<RControl />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
