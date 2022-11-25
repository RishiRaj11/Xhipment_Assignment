import React,{useContext} from 'react'
import SignUp from './component/Signin/SignUp';
import Login from './component/login/Login';
import { DataContext } from './component/context/DataProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Header from './component/header/Header';
import Profile from './component/profile/Profile';
import Logout from './component/login/Login';
import CreatePost from './component/posts/CreatePost';
const App = () => {
  const {account}=useContext(DataContext);
  const {name}=account;
  return (
    <Router>
      <header>
      <Header />
      </header>
      
      {name && <Profile/> }
      <Routes>
      <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<SignUp />}  exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/logout" element={<Logout />} exact />
        <Route path="/create" element={<CreatePost />} exact />
      </Routes>

    </Router>
  )
}

export default App;