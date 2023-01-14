import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from './pages/home';
import { SignIn, SignUp } from './pages/sign-pages';

import './app.css';


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
