import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function List(props) {
    const { _id, username, phonenumber } = props.phonelist
    const index = props.index
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{username}</td>
            <td>{phonenumber}</td>
            <td>
                <Link to={"/edit/" + _id} >Edit</Link> | <a href="#" onClick={() => props.delete(_id)}>Delete</a>
            </td>
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

    const deleteList = (id) => {
        axios.delete('/phonelist/delete/' + id)
            .then(res => {
                res.json("list deleted")
                setLists(() => {
                    return lists.filter(list => list._id !== id)
                })
            })
            .catch(() => { alert("error deleting data!") })


    }
    return (
        <div className="container">

            <Link to="/create" className="btn btn-primary">Create</Link>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((list, index) => {
                        return <List phonelist={list} index={index} key={list._id} delete={deleteList}></List>
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}