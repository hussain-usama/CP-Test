import React from 'react'
import { useHistory } from "react-router-dom";
import '../styles/index.css'

function Footer(){
  let history = useHistory();
    const addNewPost=()=>{
        localStorage.removeItem('prevpath')
        history.push('/addPost')
    }
    return(
        <div className='footerMain '>
            <button className='my-3 px-3 headingText addPostBtn' onClick={addNewPost}>
                Add New Post
            </button>
        </div>
    )
}
export default Footer