import { message } from "antd"
import  axios from "axios"
export const GET_PEOPLE = "GET_PEOPLE"


export const getPeople = () =>async (dispatch,getState) => {
    return axios("https://relation-finder-backend.herokuapp.com/api/people",{
        method:"GET",
    }).then(
        json =>{
            if(json.data.status){
                const people = json.data.people
               
                dispatch({type:GET_PEOPLE,people})
            }
        }
    )
}
export const postPeople = (people) =>async (dispatch,getState) => {

    // console.log("posting peope")
    return axios("https://relation-finder-backend.herokuapp.com/api/people",{
        method:"POST",
        data:{
            people:people
        }
    }).then(
        json =>{
            if(json.data.status){
                const people = json.data.people
                message.success("Person Posted")
                dispatch(getPeople())
            }
        }
    )
}


const initialState = {
    people:[]
}

function people(state=initialState,action){
    switch(action.type){
    case GET_PEOPLE:
        return Object.assign({},state,{
            people:action.people
        })
    default:
        return state;
    }
}
export default people