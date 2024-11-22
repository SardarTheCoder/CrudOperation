import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/CreateUser' element={<CreateUser/>}></Route>
        <Route path='/UpdateUser/:id' element={<UpdateUser/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
