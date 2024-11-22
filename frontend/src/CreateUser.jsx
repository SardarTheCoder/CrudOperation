import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()
  const navigate = useNavigate();

      const submit=(e)=>{
       e.preventDefault();
        axios.post("http://localhost:3001/CreateUser",{name,email,age})
        .then(result => {  console.log(result)
          navigate('/')
      })
        .catch(err => console.log(err))
      }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  dark:bg-gray-900">
        <div className="w-full   rounded-lg shadow-lg p-10 bg-black text-xl dark:bg-gray-800 dark:text-white">
          <h2 className="text-2xl font-bold text-gray-200 dark:text-white mb-4">
            Create New User
          </h2>
          <form onSubmit={submit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2  font-medium text-gray-400 dark:text-gray-800"
              >
                Name
              </label>
              <input
              onChange={(e)=>setName(e.target.value)}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm font-bold rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                placeholder="Enter name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2  font-medium text-gray-400 dark:text-gray-800"
              >
                Email
              </label>
              <input
                            onChange={(e)=>setEmail(e.target.value)}

                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm font-bold rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                placeholder="Enter email"
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
                            onChange={(e)=>setAge(e.target.value)}

                type="number"
                id="age"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm font-bold rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                placeholder="Enter age"
                min="0"
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={submit}
              className="w-full text-white bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
            >
              Submit
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

export default CreateUser;
