
import {ADD_POST,ALL_POSTS,USER_INFO} from '../Constants/Constants'

export const addPost = (data) => {
  console.log('action ', data)
    return {
      type: ADD_POST,
      payload: data,
    }
  }
export const allPost = (data) => {
    console.log('action ', data)
      return {
        type: ALL_POSTS,
        payload: data,
      }
}
export const personalInfo = (data) => {
  console.log('action ', data)
    return {
      type: USER_INFO,
      payload: data,
    }
}