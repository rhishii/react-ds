import './App.css'
import Login from './pages/Login'
import Home from './pages/Home';
import Movie from'./pages/Movie';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/movie' element={<Movie/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App

