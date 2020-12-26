import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import {Table,Menu,Select,Layout } from "antd"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {getPeople} from "./reducers/people"
import {getTags} from "./reducers/tags"
import {getData} from "./reducers/relation"
import { connect } from "react-redux";

import AddRelation from './components/AddRelation';
import AddInfo from "./components/AddInfo"
import DisplayInfo from './components/DisplayInfo';
import FindRelation from './components/FindRelation';

const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;
function App(props) {
 
  const [collapsed,setCollapsed] = useState(false)

  useEffect(()=>{
    props.getPeople()
    props.getTags()
    props.getData()
  },[])


  const handleTagChange = () => {

  }
  // console.log("people",props.people,props.tags)
  
  return (

    <Router>
    <div className="App">
      
  
       
        <Layout style={{ minHeight: '100vh' }}>

<Sider
    collapsible
    collapsed={collapsed}
    // onCollapse={onCollapse}
    >
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
            
            <span>Add Info</span>
            <Link to="/AddInfo" />
        </Menu.Item>
        <Menu.Item key="2">
           
            <span>Add Relation</span>
            <Link to="/AddRelation" />
        </Menu.Item>
        <Menu.Item key="3">
           
            <span>Display Info</span>
            <Link to="/DisplayInfo" />
        </Menu.Item>
        <Menu.Item key="4">
           
           <span>Find Relation</span>
           <Link to="/FindRelation" />
       </Menu.Item>
    </Menu>
</Sider>
<Layout>
    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
        <Route exact path="/AddInfo" component={AddInfo} />
        <Route path="/AddRelation" component={AddRelation} />
        <Route path="/DisplayInfo" component={DisplayInfo} />
        <Route path="/FindRelation" component={FindRelation} />
    </Content>
</Layout>
</Layout>

        </div>
        </Router>
  );
}

const mapDispatch = {
  getTags,
  getPeople,
  getData
}

const mapState = state => ({
  tags: state.tag.tags,
  people:state.people.people
})

export default connect(mapState,mapDispatch)(App);
