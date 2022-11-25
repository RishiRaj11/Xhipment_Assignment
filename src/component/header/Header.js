import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
const Header = () => {
    const {account,setAccount}=useContext(DataContext);
    const {name}=account;
    
const user={
  name:"",
  email:"",
  photo:""
}
  return (
    <div className="header">
      <Link to="/" className="logo">
        Xhipment
      </Link>
      <div className="header-right">
        {console.log(account)}
        {!name ? (
          <div>
            <Link to="/login">SignIn</Link>
          </div>
        ) : (
         <div>
           <Link >{name}</Link>
          <Link onClick={()=>setAccount(user)} >logOut</Link>
         </div>
        )}
      </div>
    </div>
  );
};

export default Header;
