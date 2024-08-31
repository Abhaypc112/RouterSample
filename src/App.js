import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/LoginPage/Login';
import Header from './Components/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import {Link, Route, BrowserRouter as Router, Routes,} from 'react-router-dom'
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Login/>
      <SignUp/>
      <Home/> */}
      <Header/>
      <Router>
        <Routes>
        <Route path='/' Component={SignUp} />
          <Route path='/home' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={SignUp} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
