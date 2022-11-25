import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom'

const Post = () => {
  const navigate=useNavigate();
  const [allpost, setallPost] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      console.log(data.data);
      setallPost(data.data);
    });
  }, [allpost]);


  //For Delete post
  const deletHandler=(id)=>{
    async function deletePost() {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
       console.log("Delete successful")
    }
    deletePost();
   // console.log(id)
  }

  const editHandler=({title,body})=>{
      navigate("/create");
     
  }

  return (
    <div className="row">
      {allpost.map((item, i) => (
         <div className="column" key={i} >
         <div class="card">
           <h2>{item.title}</h2>
           <p>{item.body}</p>
           
           <div className="btn_class">
           <button className="btn" style={{color:"blue",marginRight:"10px"} } onClick={()=>{editHandler({title:item.title,body:item.body})}} >Edit</button>
           <button className="btn" style={{color:"red",marginLeft:"10px"}} onClick={()=>{deletHandler(item.id)}} >Delete</button>
           </div>
         </div>
       </div>
      )
       
      )}
    </div>
  );
};

export default Post;
