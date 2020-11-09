import React, { Component} from 'react'


class AddItem extends Component{

    state = {
        name : '',
        grade : '',
        studentId : '',
        age : ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       if(e.target.name.value === '') {
           return false
       } else{
        this.props.addItem(this.state)
        this.setState({
            name: '',
            grade: '',
            studentId: '',
            age: ''
        })
       }
    }

    render(){
        return(
            <div>
                <form className="header" onSubmit={this.handleSubmit}>
                    <input className="hederName" type="text" placeholder="Enter Name...." id="name" onChange={this.handleChange} value={this.state.name} />
                    <input className="headerGrade" type="number" placeholder="grade...." id="grade" onChange={this.handleChange} value={this.state.grade} />
                    <input className="headerSt" type="number" placeholder="studentId...." id="studentId" onChange={this.handleChange} value={this.state.studentId} />
                    <input className="headerAge" type="number" placeholder="Age...." id="age" onChange={this.handleChange} value={this.state.age} />
                    <input className="action" type="submit" value="Add" />
                </form>
            </div>
        )
    }
}
export default AddItem;