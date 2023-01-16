import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './Pages/Auth';
import JustChecking from './Pages/JustChecking';
import Register from './Pages/Register'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='*' element={<Auth />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/register' element={<Register />} />
      <Route path='/justchecking' element={<JustChecking />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
