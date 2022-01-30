import React,{useState,useEffect} from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import { getAllPosts } from './api/api'
import Cards from '../../Components/Cards/Cards'
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';
import {useSelector,useDispatch} from 'react-redux'
import { allPost } from '../../Redux/Actions/AllActions';

function Home(){

    const [allPosts,setAllPosts]=useState([])
    const [showLoader,setShowLoader]=useState(true)
    const dispatch=useDispatch()
    const Posts=useSelector(state=>state.AllPostsReducer.List)

    // getting data from api
    useEffect(()=>{
        if(localStorage.getItem('prevpath')){
        debugger
            getAllPosts()
            .then(res=>{
                setAllPosts(res.data)
                setShowLoader(false)
            })
            .catch(error=>console.log(error))
        }else{
            console.log(Posts)
            Posts && setShowLoader(false)
        }
    },[])

    // set api data in redux
    useEffect(()=>{
        if(localStorage.getItem('prevpath')){
            dispatch(allPost({List:allPosts}))
        }
    },[allPosts])

    return(
        <div className=''>
            <PageHeader title="Home"/>
            {showLoader ? <Loader /> : 
            <div className='row mx-2'>

                {Posts && Posts.map((posts,index)=>{
                    return(
                        <div  className='col-lg-4 my-2'>
                            <Cards title={posts.title} text={posts.body} id={posts.id} />
                        </div>
                    )})}
            </div>}
            <Footer/>
        </div>
    )
}
export default Home