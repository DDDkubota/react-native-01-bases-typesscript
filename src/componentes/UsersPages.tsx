import axios from 'axios'
import React, { useEffect } from 'react'


export const UsersPages = () => {

useEffect(() => {  
 /*    fetch('https://reqres.in/api/users?page=2')
        .then( resp => resp.json())
        .then( data => console.log(data)) */
        axios.get('https://reqres.in/api/users?page=2')
        .then( resp => console.log(resp.data));

}, [])


  return (
    <div>
            <h3>Usuarios</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>avatar</td>
                        <td>nombre</td>
                        <td>email</td>
                    </tr>
                </tbody>

            </table>


    </div>
  )
}
