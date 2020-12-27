import { message } from "antd"
import  axios from "axios"
export const ADD_RELATION = "ADD_RELATION"
export const GET_RELATIONSHIP = "GET_RELATIONSHIP"
export const CLEAR_RELATION = "CLEAR_RELATION"
export const addData = (person,tag,secondaryPerson) =>async (dispatch,getState) => {
    return axios("https://relation-finder-backend.herokuapp.com/api/relations",{
        method:"POST",
        data:{
            person,tag,secondaryPerson
        },
        headers: { 
            
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
    }).then(
        json =>{
            message.success("Relationship added")
            dispatch(getData())
        }
    )
}

export const getData = () =>async (dispatch,getState) => {
    return axios("https://relation-finder-backend.herokuapp.com/api/relations",{
        method:"GET",
        headers: { 
            
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
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

export const clearRelationship = () => (dispatch,getState) =>{
    dispatch({type:CLEAR_RELATION})
}

export const getRelationship = (from,to) => async(dispatch,getState) => {
    console.log("here 23",from,to,"here it is")
    return axios("https://relation-finder-backend.herokuapp.com/api/relationship",{
        method:"POST",
        data:{
            person:from,
            secondaryPerson:to
        },
        headers: { 
            
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
    }).then(json =>{
         
        const relationship = json.data.path || ["No Relation"]
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
    case CLEAR_RELATION:
        return Object.assign({},state,
            {
                relationship:[]
            })             
    default:
        return state;
    }
}
export default relation