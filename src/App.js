import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register';
import About from './pages/About'
import Login from './pages/Login'
import './css/nicepage.css'
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile'
import Chat from './pages/Chat';
import Friends from './pages/Friends';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
    <body style={{height: '100%', paddingTop: '69px'}}>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/' element={<PrivateRoute><Chat /></PrivateRoute>} />  
      <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />  
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/explore' element={<PrivateRoute><Friends /></PrivateRoute>} />
    </Routes>
    </body>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
