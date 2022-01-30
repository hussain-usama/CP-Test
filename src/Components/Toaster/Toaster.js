import React,{useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToasterProgress(props){

    useEffect(()=>{
        toast.success(props?.title);
    },[])
    return(
       <>
       <ToastContainer autoClose={2000}/>
       </>
    )
}
export default ToasterProgress