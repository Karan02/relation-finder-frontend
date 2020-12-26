import { message } from "antd"
import  axios from "axios"
export const ADD_RELATION = "ADD_RELATION"
export const GET_RELATIONSHIP = "GET_RELATIONSHIP"

export const addData = (person,tag,secondaryPerson) =>async (dispatch,getState) => {
    return axios("http://localhost:8080/api/relations",{
        method:"POST",
        data:{
            person,tag,secondaryPerson
        }
    }).then(
        json =>{
            message.success("Relationship added")
            dispatch(getData())
        }
    )
}

export const getData = () =>async (dispatch,getState) => {
    return axios("http://localhost:8080/api/relations",{
        method:"GET"
    }).then(
        json =>{
            if(json.data.status){
                const relations = json.data.relations
                // console.log("relations are :",relations)
                dispatch({type:ADD_RELATION,relations})
            }
        }
    )
}

export const getRelationship = (from,to) => async(dispatch,getState) => {
    console.log("here 23",from,to,"here it is")
    return axios("http://localhost:8080/api/relationship",{
        method:"POST",
        data:{
            person:from,
            secondaryPerson:to
        }
    }).then(json =>{
         
        const relationship = json.data.path
        dispatch({type:GET_RELATIONSHIP,relationship})
    })
}

const initialState = {
    relations:[],
    relationship:[]
}

function relation(state=initialState,action){
    switch(action.type){
    case ADD_RELATION:
        return Object.assign({},state,{
            relations:action.relations
        })
    case GET_RELATIONSHIP:
        return Object.assign({},state,
            {
                relationship:action.relationship
            })    
    default:
        return state;
    }
}
export default relation