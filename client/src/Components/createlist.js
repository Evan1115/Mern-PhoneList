import React, { useState } from 'react';
import axios from 'axios';


export default function Createlist() {
    const [phonelist, setPhoneList] = useState({ username: "", phonenumber: "" });


    function handleSubmit(event) {
        event.preventDefault();
        const newList = {
            username: phonelist.username,
            phonenumber: phonelist.phonenumber
        }
        console.log(newList)
        //connect to backend
        axios.post('/phonelist/add', newList)
            .then(res => console.log(res.data))

        window.location = '/';


    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPhoneList(prevInput => ({ ...prevInput, [name]: value }))
    }

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label >Username</label>
                    <input
                        className="form-control"
                        placeholder="Enter username"
                        name="username"
                        value={phonelist.username}
                        onChange={handleInputChange}
                        required></input>

                </div>
                <div className="form-group">
                    <label >Phone Number</label>
                    <input
                        className="form-control"
                        placeholder="Phone Number"
                        name="phonenumber"
                        value={phonelist.phonenumber}
                        onChange={handleInputChange}
                        required></input>
                </div>

                <button className="btn btn-primary mt-3">Save</button>
            </form>
        </div>
    );
}