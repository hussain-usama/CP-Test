import {ALL_POSTS,ADD_POST} from '../Constants/Constants'

const initialState={}

 const AllPostReducer=function(state=initialState,action){
     console.log("reducer",action.payload)
    switch(action.type){

        case ALL_POSTS :
            debugger
            // if(action.payload.formData){
            //     return action.payload.AllPosts
            // }else{
                return action.payload
            // }
            
            
        default :
          return state
    }

}
export default AllPostReducer
