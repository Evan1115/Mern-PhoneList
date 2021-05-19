import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function List(props) {
    const { username, phonenumber } = props.phonelist
    const index = props.index
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{username}</td>
            <td>{phonenumber}</td>
        </tr>
    );
}

export default function Phonelist() {
    const [lists, setLists] = useState([])
    useEffect(() => {
        axios.get('/phonelist')
            .then(res => setLists(res.data))
            .catch(() => { alert("error retrieving data!") })
    }, [])
    return (
        <div className="container">

            <Link to="/create" className="btn btn-primary">Create</Link>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((list, index) => {
                        return <List phonelist={list} index={index} key={list._id}></List>
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}