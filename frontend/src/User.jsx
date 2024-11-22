import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import axios from "axios";


const User = () => {
  const [user, setUser] = useState([]);


  useEffect(()=>{
    axios.get('http://localhost:3001')
      .then(result => {setUser(result.data)})
      .catch(err => console.log(err))

  },[])
  const handleDelete=(id) =>{
    console.log("id",id)
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
    .then(res => {console.log(res)
      window.location.reload()})
    
    .catch(err => console.log(err))
    
  }

  return (
    <>
      <div>
        <div>
        <Link to="/CreateUser" className=" flex  gap-2 justify-center items-center text-3xl font-bold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50
                 dark:shadow-lg dark:shadow-lime-800/80  rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Add<TiPlus />
</Link>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
             
              <tr className="font-bold text-2xl">
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                <AiOutlineDown/> 
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((per, i) => (
                <tr key={i} className="text-black text-xl">
                  <td className="px-6 py-4">{per.name}</td>
                  <td className="px-6 py-4">{per.email}</td>
                  <td className="px-6 py-4">{per.age}</td>
                  <td className="px-6 py-4">
                    <Link to={`/UpdateUser/${per._id}`} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-500 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</Link>
                    <button type="button" onClick={(e) => handleDelete(per._id)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-rose-800 to-lime-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
