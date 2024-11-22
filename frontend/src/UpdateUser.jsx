import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const {id} = useParams();
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [age,setAge] =useState();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:3001/getUser/`+id)
    .then(result =>{ console.log(result.json)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err=>console.log(err))
  },[])


   const Update = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/`+id , { name,email,age })
    .then(result => { console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
   }


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
        <div className="w-full rounded-lg shadow-lg p-10 bg-black text-xl dark:bg-gray-800 dark:text-white">
          <h2 className="text-2xl font-bold text-gray-200 dark:text-white mb-4">
            Update User
          </h2>
          <form onSubmit={Update} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-400 dark:text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                placeholder="Enter name"
                value={name}
                onChange={((e)=>setName(e.target.value))}
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-400 dark:text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                placeholder="Enter email"
                value={email}
                onChange={((e)=>setEmail(e.target.value))}

              />
            </div>

            {/* Age Input */}
            <div>
              <label
                htmlFor="age"
                className="block mb-2 font-medium text-gray-400 dark:text-gray-800"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                placeholder="Enter age"
                min="0"
                value={age}
                onChange={((e)=>setAge(e.target.value))}

              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={Update}
              className="w-full text-white bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
            >
              Update
            </button>
          </form>
          {/* Back Link */}
          <Link
            to="/"
            className="mt-4 inline-block text-2xl font-medium text-lime-600 hover:underline dark:text-lime-400"
          >
            Back to User List
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
