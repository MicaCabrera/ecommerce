import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'
import { ProductsHeader } from './pages/products/ProductsHeading'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<ProductsHeader />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/:id" element={<Details />}></Route>
      </Routes>
    </AppLayout>
  )
}

export default App
