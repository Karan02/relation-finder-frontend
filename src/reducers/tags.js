import { message } from "antd"
import  axios  from "axios"
export const GET_TAGS = "GET_TAGS"


export const getTags = () => (dispatch,getState) => {
    return axios("https://relation-finder-backend.herokuapp.com/api/tags",{
        method:"GET"
    }).then(
        json =>{
            // console.log("json",json)
            if(json.data.status){
                const tags = json.data.tags
                // console.log("tagsf rom back",tags)
                dispatch({type:GET_TAGS,tags})
            }
        }
    )
}

export const postTags = (tag) => (dispatch,getState) => {
    return axios("https://relation-finder-backend.herokuapp.com/api/tags",{
        method:"POST",
        data:{
            tag:tag
        }
    }).then(
        json =>{
            if(json.status){
                message.success("Tag posted")
                dispatch(getTags())
            }
        }
    )
}

const initialState = {
    tags:[]
}

function tags(state=initialState,action){
    switch(action.type){
    case GET_TAGS:
        return Object.assign({},state,{
            tags:action.tags
        })
    default:
        return state;
    }
}
export default tags