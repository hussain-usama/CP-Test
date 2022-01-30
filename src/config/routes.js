import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import AddPosts from "../Pages/AddPosts/AddPosts";
import FormData from "../Pages/PersonalInfo/PersonalInfo";
import Home from "../Pages/Home/Home";

function BasePage(){
    const getUserId=localStorage.getItem('userId')
    const currentPath = window.location.pathname.length === 1 ? '/home' : window.location.pathname
return(
        <>
        <Switch>
            <Route path="/" exact>
                {getUserId ? < Redirect to={currentPath} /> : <FormData />}
            </Route> 
            <Route path="/home">
                {AuthChecker(getUserId,<Home />)}
            </Route> 
            <Route path="/addPost">
                {AuthChecker(getUserId,<AddPosts />)}
            </Route> 
        </Switch>
        </>
)
}

function AuthChecker(getUserId, component) {
    return getUserId ? component : <Redirect to='/' />
}

export default BasePage 