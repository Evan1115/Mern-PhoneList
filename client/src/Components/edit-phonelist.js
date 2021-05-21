import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Editlist(props) {

    const [list, setList] = useState({ username: "", phonenumber: "" })


    //fetch data from database to display on the form
    useEffect(() => {

        //get the specific data using the id behind the url
        console.log(props.match.params.id)
        axios.get('/phonelist/' + props.match.params.id)
            .then(res => setList({
                username: res.data.username,
                phonenumber: res.data.phonenumber
            }))
            .catch(err => console.log(err))
    }, [])


    //handle input change on form
    function handleInputChange(event) {
        const { name, value } = event.target

        setList(prevInput => ({ ...prevInput, [name]: value }))
    }


    //handle submit
    function handleSubmit(event) {
        event.preventDefault();
        const newList = {
            username: list.username,
            phonenumber: list.phonenumber
        }

        console.log(newList)

        axios.post("/phonelist/update/" + props.match.params.id, newList)
            .then(res => window.location = "/")
            .catch(err => console.log(err))

        //redirect to home route


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
                        value={list.username}
                        onChange={handleInputChange}
                        required></input>

                </div>
                <div className="form-group">
                    <label >Phone Number</label>
                    <input
                        className="form-control"
                        placeholder="Phone Number"
                        name="phonenumber"
                        value={list.phonenumber}
                        onChange={handleInputChange}
                        required></input>
                </div>

                <button className="btn btn-primary mt-3">Save</button>
            </form>
        </div>
    );
}