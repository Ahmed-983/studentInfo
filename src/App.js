import React, { Component } from 'react'
import ListItem from './components/ListItem'
import AddItem from './components/WorkItem'

class App extends Component {
state ={
  items : [
    {id:1,name:"Ruben",grade:"10",studentId:6546546,age:15},
    {id:2,name:"Caroline",grade:"7",studentId:1478520,age:12},
    {id:3,name:"Reyli",grade:"5",studentId:1239637,age:10}
  
  ]
}
 deleteItem = (id) => {
   let items = this.state.items.filter(item => {
     return item.id !== id;
   })
   this.setState({items})
 }

 addItem = (item) => {
   item.id = Math.random();
   let items = this.state.items;
   items.push(item);
   this.setState({items})
 }
 
  render(){
    return (
      <div className="App container">
        <h1 className="title underLine">Student Information</h1>
        <ListItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
 
}

export default App;
