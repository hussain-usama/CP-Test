const axios=require('axios')

export const getAllPosts=()=>{
    return new Promise((resolve,reject)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            reject(error)
        })
    })
}