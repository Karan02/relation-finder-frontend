
import {Table } from "antd"
import { connect } from "react-redux";
import {useEffect} from "react"
import  {getPeople} from "../reducers/people"
import {getTags} from "../reducers/tags"
function DisplayInfo(props) {
  useEffect(()=>{
    props.getTags()
    props.getPeople()
  },[])
      const columns = [
        {
          title:"Name",
          dataIndex: "person",
          
        },{
          title:"Relationship",
          dataIndex:"relationship",
          
        },{
          title:"Secondary Person",
          dataIndex:"secondaryPerson",
          
        }
      ]
      console.log("relationship",props.relation)
      const value = props.relation
    return(
        <div>
             <Table 
                columns={columns}
                style={{width:"500px",margin:"auto",padding:"50px"}}
                // datasource={value}
                dataSource={value}
            />
        </div>
    )
}

const mapState = state => ({
    relation:state.relation.relations,
    state
})
const mapDispatch = {
  getTags,
  getPeople
}

export default connect(mapState,mapDispatch)(DisplayInfo)