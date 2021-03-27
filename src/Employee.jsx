import React from 'react';

// We usually pass props from parents component to child component
const Employee = (props) => {
    

    // we can destructure and create our own JS variable if we wanted to
    // const {id, firstName, age} = props
        // then we can just refer to id and firstname without using props. 

    // we can reassign stuff like this using :
    const {age: employeeAge} = props
    //  we can also destructure straight in the Employee = (props)
    // straight in the props bit like
    // const Employee = ({firstName, id, age}}) => {

    return <React.Fragment>
        {/* <h1>Employee {props.id}: {props.firstName}</h1>
        this works, but we should use string interpolation (to inject strings into JS) */}

        <h3>{`Employee ${props.id}: ${props.firstName}`} | age: {employeeAge}</h3>
    </React.Fragment>
}

export default Employee;