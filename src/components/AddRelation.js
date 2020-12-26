import { useState,useEffect } from "react"
import {Table,Input,Button,Select,Card } from "antd"
import { connect } from "react-redux";
import  {getPeople,postPeople} from "../reducers/people"
import {getTags,postTags} from "../reducers/tags"
import {addData} from "../reducers/relation"
const { Option } = Select;

function AddRelation(props){
    const [tag,setTag] = useState([])
    const [person,setPerson] = useState([])
    const [secondaryPerson,setSecondaryPerson] = useState([])
    const handleSubmit = () =>{
      props.addData(person,tag,secondaryPerson)
      setTag([])
      setPerson([])
      setSecondaryPerson([])
    }
    useEffect(()=>{
      getTags(),
      getPeople()
    },[])
    return(<div className="site-card-border-less-wrapper">
    <Card title="Add Relationship" bordered={true} style={{ width: 500, margin: "auto"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
          <div style={{padding:"15px"}}>
            {console.log("people",props.people,"tag",props.tags)}
          <Select placeholder="Select Person" value={person}  onChange={(value)=>{
              setPerson(value)
          }} style={{width:"240px"}}> { props && props.people.length > 0 ? props.people.map(person =>{
            
             return(
               <Option value={person.name}>

                 {person.name}
               </Option>
             )
           }):null}  </Select>
          </div>
          <div  style={{padding:"15px"}}>
          <Select value={tag} placeholder="Select Tag"  onChange={(tag)=>{
            setTag(tag)
          }} style={{width:"240px"}}> {props && props.tags.length > 0 ? props.tags.map(tag =>{
             return(
               <Option value={tag.name}>
                 {tag.name}
               </Option>
             )
           }):null}  </Select>
          </div>
          <div  style={{padding:"15px"}}>
          <Select value={secondaryPerson} placeholder="Select Secondary Person" onChange={(value)=>{
              setSecondaryPerson(value)
          }} style={{width:"240px"}}>{props && props.people.length > 0 ? props.people.map(people =>{
             return(
               <Option value={people.name}>
                 {people.name}
               </Option>
             )
           }):null}</Select>
          </div>
          <div>
          <Button onClick={()=>handleSubmit()} style={{width:"140px"}}>Submit</Button>
          </div>
         
        </div>
    </Card>
  </div>)
}

const mapDispatch = {
  getTags,
  postTags,
  getPeople,
  postPeople,
  addData
}

const mapState = state => ({
  tags: state.tag.tags,
  people:state.people.people
})
export default connect(mapState,mapDispatch)(AddRelation)