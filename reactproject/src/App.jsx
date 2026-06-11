import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
<div>
      <Routes>
              <Route path='/' element={<Signin/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/home' element={<Home/>} />
      </Routes>
</div>      
             
    )
  }
export default App;

// hoo