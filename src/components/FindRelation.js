import { useState } from "react"
import { Card,Select,Button } from "antd"
import { connect } from "react-redux"
import { getRelationship } from "../reducers/relation"
const {Option} = Select

function FindRelation(props) {

    const [person1,setPerson1] = useState([])
    const [person2,setPerson2] = useState([])

    const handleSubmit = () => {
      // console.log("here 2")
        props.getRelationship(person1,person2)
        setPerson2([])
        setPerson1([])
    }

    return(
        <div style={{margin:"auto",paddingTop:"80px"}}>
          <Card bordered={true} title="Find Out Relation" style={{ width: 500,margin:"auto",marginBottom:"15px" }}>
            <p>
            <Select placeholder={"Select Person"} value={person1} onChange = {(e) =>setPerson1(e)} style={{width:"190px"}}>{props.people.map(person => <Option value={person.name}>{person.name}</Option>)}</Select>
            </p>
            To
            <p>
            <Select placeholder={"Select Person"} value={person2} onChange = {(e) =>setPerson2(e)} style={{width:"190px"}}>{props.people.map(person => <Option value={person.name}>{person.name}</Option>)}</Select>
            </p>
            <p>
            <Button onClick={()=>{
              console.log("here 1")
              handleSubmit()}}>Submit</Button>
            </p>
        </Card> 
        <Card title="Result" style={{margin:"auto", width: 500 }}>
        <p style={{fontWeight:"bold",fontSize:"18px"}}>{props.relationship.map((person,index)=> index == 0 ? <lable>{person} </lable>:<lable> {" > "}{person}  </lable>)}</p> 
    </Card>
        </div>
    )
}

const mapState = state => ({
    people:state.people.people,
    relationship:state.relation.relationship
  })

const mapDispatch = {
  getRelationship
}  

export default connect(mapState,mapDispatch)(FindRelation)