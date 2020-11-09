import React from 'react'


const ListItem = (props) => {
    const {items , deleteItem} = props;
    let length = items.length;
    const Person = length ? items.map(item => {
        return(
            <div className="header" key={item.id}>
                <span className="name hederName">{item.name}</span>
                <span className="grade headerGrade">{item.grade}</span>
                <span className="studentId headerSt">{item.studentId}</span>
                <span className="age headerAge">{item.age}</span>
                <span className="action delete" onClick={() => deleteItem(item.id)}>&times;</span>
            </div>
        )
    }) : <span className="result">there is No person Info!</span>
    
    return(
        <div>
            <div className="header ">
                <span className="hederName backColor">Name</span>
                <span className="headerGrade backColor">Grade</span>
                <span className="headerSt backColor">Student ID</span>
                <span className="headerAge backColor">Age</span>
                <span className="action backColor">Action</span>
            </div>
            {Person}
        </div>
    )
}

export default ListItem;