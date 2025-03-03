import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteUser } from 'firebase/auth';
import { AuthContext } from '../../Providers/AuthProvider';


const Users = () => {
    const usersInfo = useLoaderData()
    console.log(usersInfo);

    const { user } = useContext(AuthContext)

    const handleDelete = () => {
        deleteUser(user)
        .then(data =>{
            console.log(data);
            
        })
        .catch(
            err => {
                console.log(err);
                
            }
        )
       
    }

    return (
        <div className="overflow-x-auto">
            <table className="table fontRailway">
                {/* head */}
                <thead>
                    <tr>
                        <th className='fontRailway'>No.</th>
                        <th className='fontRailway'>Name</th>
                        <th className='fontRailway'>Email</th>
                        <th className='fontRailway'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersInfo.map((userInfo, i) =>
                            <tr key={userInfo._id}>
                                <th className='fontRailway'>{1 + i}</th>
                                <td className='fontRailway'>{userInfo.displayName}</td>
                                <td className='fontRailway'>{userInfo.email}</td>
                                <td><button className='btn btn-primary' onClick={() => handleDelete()}>Delete</button></td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;