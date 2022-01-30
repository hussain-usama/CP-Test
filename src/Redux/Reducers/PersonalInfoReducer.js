import {USER_INFO} from '../Constants/Constants'

const initialState={}

 const PersonalReducer=function(state=initialState,action){
     console.log("reducer",action.payload)
    switch(action.type){

        case USER_INFO :
            return{
                ...state,
                data:action.payload,
            }            
        default :
          return state
    }

}
export default PersonalReducer
