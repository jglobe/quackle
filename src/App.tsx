import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from './pages/Home';
import { SignIn, SignUp } from './pages/SignPages';

import './App.css'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/signin"
          element={<SignIn/>}
        />
        <Route
          path="/signup"
          element={<SignUp/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
