import React,{useState} from 'react'
import { Label, Input  } from "reactstrap";
import PageHeader from '../../Components/PageHeader/PageHeader'
import { allPost } from '../../Redux/Actions/AllActions';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import '../styles/index.css'
import ToasterProgress from '../../Components/Toaster/Toaster';

const INITIAL_STATE={
    title:"",
    body:"",
    id:100,
    userId:10
}

function AddPosts(){

    const [formData,setFormData]=useState({...INITIAL_STATE})
    const [inValidTitle,setinValidTitle]=useState(false)
    const [invalidDesc,setinvalidDesc]=useState(false)  
    const [SubmitForm,setSubmitForm]=useState(false)
    const dispatch = useDispatch()
    let history = useHistory()
    const getAllPosts=useSelector(state=>state.AllPostsReducer.List)
    console.log(getAllPosts)
    // handle change function
    const handleChange=(event)=>{
        let name=event.target.name
        let value=event.target.value

        setinValidTitle(false)
        setinvalidDesc(false)
        setFormData((prevState)=>({
            ...prevState,
            [name]:value,
            id:formData.id++,
            userId:formData.userId++,
        }))
    }

    // submit post function
    const submitPost=()=>{
        if(formData.title==""){
            setinValidTitle(true)
        }else{
            setinValidTitle(false)
            if(formData.body==""){
                setinvalidDesc(true)
            }else{
                setinvalidDesc(false)
                setSubmitForm(true)
                const temp=[...getAllPosts]
                temp.push(formData)
                dispatch(allPost({List:temp,formData:formData}))
                setTimeout(()=>{history.push('/home')},1000)
            }
        }
    }

    return(
        <div className='row '>
             {SubmitForm && <ToasterProgress title="Post Added Successfully !" />}
            <PageHeader title="Add Post"/>
            <div className="col-lg-4"></div>
            <div className="col-lg-4 mt-4 px-4">
                <Label className="mt-2 headingText labelColor">Title</Label>
                <Input
                    name="title"
                    placeholder="Enter title"
                    value={formData.title ? formData.title : ""}
                    onChange={handleChange}
                    invalid={inValidTitle}
                />
                <Label className="mt-2 headingText labelColor">Description</Label>
                <Input
                name="body"
                placeholder="Enter description"
                type='textarea'
                value={formData.body ? formData.body : ""}
                onChange={handleChange}
                invalid={invalidDesc}
                />

                <div className='footerMain px-3'>
                    <button className='my-3 px-3 addPostBtn headingText submitPost' onClick={submitPost}> 
                        Submit
                    </button>
                </div>
            </div>
           
        </div>
    )
}
export default AddPosts