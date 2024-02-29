"use client";
import React from 'react';
import { useState, useEffect } from 'react';

export default function Page() {
    const [data, setData] = useState([]);
    const [employeeID, setEmployeeID] = useState('');
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        if (employeeID !== '') {
            fetch(`http://localhost:8080/employee/${employeeID}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    setData(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            fetch(`http://localhost:8080/employees`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    setData(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [employeeID]);

    // use effect for the user data

    useEffect(() => {
        if (userName !== '') {
            console.log("REQUEST:" + userName);
            fetch(`http://localhost:8080/user/name/${userName}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    setUserData(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            fetch(`http://localhost:8080/user/all`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    setUserData(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [userName]);

    function handleInputChange(event) {
        setEmployeeID(event.target.value);
    }

    function handleInputChangeUser(event) {
        setUserName(event.target.value);
    }

    return (
        <>

        {/* It's better to return two REACT components in stead of returning a lot of code in this function */}
        <div>
            <h1 className='text-4xl'>Retrieve information Employee</h1>
            <br />
            <form>
                <input
                    type='number'
                    name='employeeID'
                    placeholder='employee ID'
                    className='border border-gray-300 rounded-md px-4 py-2 w-1/4'
                    max = {15}
                    min = {1}
                    onChange={handleInputChange}
                />
            </form>
            <br />
            <div>
                <h2 className='text-2xl'>Employee Information</h2>
                <div>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    ID
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Name
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Role
                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {data.length > 1 && data.map((item, index) => (
                                <tr key={index}>
                                    <td className='px-6 py-4 whitespace-nowrap'>{item.id}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{item.role}</td>
                                </tr>
                            ))}
                            {/* There is probably a better way to escape the length then this... */}
                            {data.length === undefined && (
                                <tr>
                                    <td className='px-6 py-4 whitespace-nowrap'>{data.id}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{data.name}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{data.role}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <br /><br />
        {/* The second part of the page */}
        <div>
            <h1 className='text-4xl'>Retrieve information About Users</h1>
            <br />
            <form>
                <input
                    type='text'
                    name='UserName'
                    placeholder='Enter name of user'
                    className='border border-gray-300 rounded-md px-4 py-2 w-1/4'
                    onChange={handleInputChangeUser}
                />
            </form>
            <br />
            <div>
                <h2 className='text-2xl'>User Information</h2>
                <div>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    ID
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Name
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {userData.length > 1 && userData.map((item, index) => (
                                <tr key={index}>
                                    <td className='px-6 py-4 whitespace-nowrap'>{item.id}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{item.email}</td>
                                </tr>
                            ))}
                            {/* There is probably a better way to escape the length then this... */}
                            {userData.length === undefined && (
                                <tr>
                                    <td className='px-6 py-4 whitespace-nowrap'>{userData.id}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{userData.name}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{userData.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}
