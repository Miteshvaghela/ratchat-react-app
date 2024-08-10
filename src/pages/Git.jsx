import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Git = ({}) => { 
const [userData, SetUserData] = useState([]);
let { userId } = useParams();

const fetchGitInfo = () => {
  fetch(`https://api.github.com/users/${userId}`)
    .then(data => data.json())
    .then(res => SetUserData(res))
    .catch(error => console.error(error));  
}

const handleFetchGitData = () => {
    fetchGitInfo()
}

console.log(userData, ': User Data');
  return (
    
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Git user : { userId }
        </h1> 
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Followers : {userData.followers}</p>
        <img src={userData.avatar_url} alt={userData.name} className='block m-auto rounded-full w-40' />
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{userData.bio}</p>
        <button onClick={handleFetchGitData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mb-4">Fetch Git Info</button> 
    </div>
</section>
  )
}

export default Git