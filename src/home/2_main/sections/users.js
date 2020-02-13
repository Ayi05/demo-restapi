import React, { useState, useEffect } from 'react';


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    });

    return (

        <div className="border">
            <table className="table table-md table-hover">
                <thead className="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr className="">
                            <td><small>{user.name}</small></td>
                            <td><small>{user.email}</small></td>
                            <td><small>{user.address.city}</small></td>
                            <td><small>{user.company.name}</small></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
};
export default Users;