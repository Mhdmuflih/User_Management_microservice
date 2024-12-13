import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import SignUp from './Pages/Signup/SignUp'
import Login from './Pages/Login/Login'
import EditUser from './Pages/EditUser/EditUser'
import Chat from './Pages/Chat/Chat'

function App() {
  return (
    <div>
      <Routes>

        <Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/edit-user' element={<EditUser />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
        </Route>

        <Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Route>

      </Routes>

    </div>
  )
}

export default App
