import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Label, Input  } from "reactstrap";
import UserAvatar from "../../Assets/images/UserAvatar.jpg";
import PageHeader from "../../Components/PageHeader/PageHeader";
import {useSelector,useDispatch} from 'react-redux';
import '../styles/index.css'
import { personalInfo } from "../../Redux/Actions/AllActions";
import ToasterProgress from "../../Components/Toaster/Toaster";

const INITIAL_STATE = {
  name: "",
  email: "",
  gender: "",
  gender:"",
  imgUrl:"",
  DOB: new Date(),
};

function FormData() {

  // states
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [imgPreview,setPreview]=useState('')
  const [SubmitForm,setSubmitForm]=useState(false)
  const [inValidName,setinValidName]=useState(false)
  const [inValidEmail,setinValidEmail]=useState(false)
  const [invalidGender,setinvalidGender]=useState(false)

  let history = useHistory();
  const dispatch=useDispatch()

  // handle change function
  const handleChange = (event) => {

    let name = event.target.name;
    if(name=="imgUrl"){
      var value = event.target.files[0]
      setPreview(URL.createObjectURL(event.target.files[0])) 
    }else{
      var value = event.target.value;
    }
    setinValidName(false)
    setinValidEmail(false)
    setinvalidGender(false)
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  // form submit function
  const submitForm=()=>{
    console.log(formData)
    if(formData.name==""){
      setinValidName(true)
    }else{
      setinValidName(false)
      if(formData.email==""){
        setinValidEmail(true)
      }else{
        setinValidEmail(false)
        if(formData.gender==""){
          setinvalidGender(true)
        }else{
          setinvalidGender(false)
          dispatch(personalInfo(formData))
          setSubmitForm(true)
          localStorage.setItem('prevpath',window.location.pathname)
          localStorage.setItem('userId',(Math.random() + 1).toString(36).substring(7))
          setTimeout(()=>{window.location.replace('/home')},2000)
        }
      }
    }
  }

  return (
    <div className="row ">
      {SubmitForm && <ToasterProgress title="Successfully Registered !" />}
        <PageHeader title="Personal Info"/>
      <div className="col-lg-4"></div>
      <div className="col-lg-4 mt-4 px-4">
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 avatar-preview">
                <img src={imgPreview ? imgPreview : UserAvatar} />
            </div>
                
            <div className="row">
            <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <input
                        type="file"
                        accept="image/*"
                        className='d-none'
                        id="contained-button-file"
                        name="imgUrl"
                        onChange={handleChange}
                    />
                    <label htmlFor="contained-button-file" className='mt-2 p-2 upload-img-label' >
                            Upload Photo
                    </label>
                </div>
            </div>
        </div>

       
          <Label className="mt-2 headingText labelColor">Name</Label>
          <Input
            name="name"
            placeholder="Enter your name"
            value={formData.name ? formData.name : ""}
            onChange={handleChange}
            invalid ={inValidName}
          />
        <Label className="mt-2 headingText labelColor">Email</Label>
        <Input
          name="email"
          placeholder="Enter your email"
          value={formData.email ? formData.email : ""}
          onChange={handleChange}
          invalid ={inValidEmail}
        />
        <Label className="mt-2 headingText labelColor">Date Of Birth</Label>
        <Input
          name="DOB"
          type="date"
          value={formData.DOB ? formData.DOB : ""}
          onChange={handleChange}
        />
        <Label className="mt-2 headingText labelColor">Gender</Label> <br/>
        <div className="d-flex justify-content-around">
            <div >
              <Input name="gender" type="radio" value="male" onChange={handleChange} invalid={invalidGender} />
              <Label className="radiosLabel">Male</Label>
            </div>
            <div >
              <Input name="gender" type="radio" value="female" onChange={handleChange} invalid={invalidGender}/>
              <Label className="radiosLabel">Female</Label>
            </div>
        </div>

        <button className="mt-3 headingText submitButton" onClick={submitForm}>
            Submit
        </button>
      </div>
    </div>
  );
}
export default FormData;
