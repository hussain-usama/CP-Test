import {ADD_POST} from '../Constants/Constants'

const initialState={}

 const AddpostReducer=function(state=initialState,action){
    //  console.log("reducer",action.payload)
    switch(action.type){

        case ADD_POST :
            const temp=[...action.payload.AllPosts]
            temp.push()
            return{
                ...state,
                data:action.payload,
            }            
        default :
          return state
    }

}
export default AddpostReducer
