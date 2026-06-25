import { Cars } from './components/Cars'
import { Football } from './components/Football'
import { Phones } from './components/Phones'
import { Pieces } from './components/Pieces'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Category } from './components/Category'

export const App = () => {
  return (
    <>

      <Header />

        <Routes>
          <Route index element={<Category />} />
          <Route path='/phones' element={<Phones />} />
          <Route path='/football' element={<Football />} />
          <Route path='/pieces' element={<Pieces />} />
          <Route path='/cars' element={<Cars />} />
        </Routes>
    </>
  )
}
