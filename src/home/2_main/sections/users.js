import React, { useState, useEffect } from 'react';


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(data => setUsers(data))
    });

    return (

        <>
            {/* Visible only on xs and sm screen  */}
            <div className="border d-md-none">
                <table className="table table-md table-hover">
                    <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr className="">
                                <td><small>{user.name}</small></td>
                                <td><small>{user.company.name}</small></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Visible only on md screen and above */}
            <div className="border d-none d-md-block">
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
        </>
    )
};
export default Users;