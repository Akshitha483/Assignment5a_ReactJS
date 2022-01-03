import React, { useState } from "react";

function UserForm(props) {

    const [userData, setuserData] = useState({
        firstName: '',
        lastName: '',
        password: ''
    })
    //console.log(userData);
    let updateUserData = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }


    let saveData=()=>{
        //validation
        props.getUserData(userData)
        setuserData({
            firstName:'',
            lastName:'',
            password:''
        })
    }

    return (
        <div className='container'>
            <h2>Login Form</h2>
            
                <div className='mb-3'>
                    <input name='firstName' type="text" className="form-control" placeholder="Enter Firstname" 
                    value={userData.firstName} onChange={(event)=>{updateUserData(event)}}/>
                </div>

                <div className='mb-3'>
                    <input name='lastName' type="text" className="form-control" placeholder="Enter Lastname" 
                    value={userData.lastName} onChange={(event)=>{updateUserData(event)}}/>
                </div>

                <div className='mb-3'>
                    <input name='password' type="password" className="form-control" placeholder="Enter Password" 
                    value={userData.password} onChange={(event)=>{updateUserData(event)}}/>
                </div>
            
                <button type="submit" class="btn btn-primary" onClick={saveData}>Save</button>
            
        </div>
    );
}

export default UserForm
