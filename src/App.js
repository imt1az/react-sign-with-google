import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Header/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';


function App() {
  return (
    <div className="App">
     <Header></Header>
     

     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/registration' element={<Registration></Registration>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
