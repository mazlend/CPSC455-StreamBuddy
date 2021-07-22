// import React, { createContext, useEffect, useState } from 'react'
// import axios from 'axios';
//
// export const UserContext = createContext({});
// export default function Context(props) {
//
//     const [user, setUser] = useState();
//
//     const getUser = (user) => {
//         axios.get(`http://localhost:5000/api/users/${user._id}`)
//             .then((res) => {
//                 if (res.data) {
//                     setUser(res.data);
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }
//
//     useEffect(() => {
//         getUser();
//     }, [])
//
//     return (
//         <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
//     )
// }