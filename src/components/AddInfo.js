import { useState } from "react"
import {Input,Button,Select,Card } from "antd"
import { connect } from "react-redux";
import people, {getPeople,postPeople} from "../reducers/people"
import {getTags,postTags} from "../reducers/tags"



function AddInfo(props){
    
    const [person,setPerson] = useState("")
    const [tag,setTag] = useState("")
    const handlePersonSubmit =async () =>{
        
       props.postPeople(person)
       setPerson("")
    }
    const handleTagSubmit =async () => {
       props.postTags(tag)
       setTag("")
    }
    return(<div className="site-card-border-less-wrapper">
   <div className="site-card-border-less-wrapper">
    <Card title="Add Information" bordered={true} style={{ width: 500, margin: "auto"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
          <div style={{padding:"30px"}}>
          <Input placeholder="Add Person" value={person} onChange={(e)=>setPerson(e.target.value)} style={{width:"240px"}}/><Button disabled={person == "" ? true:false} onClick={()=>handlePersonSubmit()} style={{width:"140px"}}>Submit</Button>
          </div>
          <div>
          <Input placeholder="Add Tag" value={tag} onChange={(e)=>setTag(e.target.value)} style={{width:"240px"}}/><Button disabled={tag == "" ? true:false} onClick={()=>handleTagSubmit()} style={{width:"140px"}}>Submit</Button>
          </div>
         
        </div>
    </Card>
  </div>
  
  </div>)
}

const mapDispatch = {
    getTags,
    postTags,
    getPeople,
    postPeople
}

const mapState = state => ({
  tags: state.tag.tags,
  people:state.people.people
})
export default connect(mapState,mapDispatch)(AddInfo)