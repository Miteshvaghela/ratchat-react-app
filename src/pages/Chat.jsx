import React, {useEffect, useMemo, useState} from 'react'  
import { io } from 'socket.io-client';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');    
  const handleSendMessaageEvent = (e) => {
    e.preventDefault(); 
  }  
  const socket = useMemo(() => {
    return io('http://localhost:8000')
  }, []);
 
  socket.on('connect', () => {
    console.log(
      'User connected : ', socket.id
    );
  })
   
  return (
    
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
         
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Chat</h1>
        
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

    <div className='flex sm:block md:flex lg:flex xl:flex  justify-evenly sm:w-full w-full'>          
      <div className="message-form w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <form className="max-w-sm mx-auto" onSubmit={handleSendMessaageEvent}>
            <div className="mb-5">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Username</label>
              <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 text-left dark:text-white">Message</label>
              <textarea id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message" onChange={e => setMessage(e.target.value)}></textarea>
            </div> 
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
          </form>
      </div>
      <div className="message-block w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:mt-5"> 
        <div className="messages bg-gray-300 w-full  p-4 rounded-lg m-auto h-96 overflow-scroll overflow-x-hidden">          
            <p className="left text-left"><b>Miteshvaghela</b> : Hello</p>
            <p className="right text-right"><b>John</b> : Hiii</p>           
        </div>
      </div>
    </div>
        
    </div>
</section>
  )
}

export default Chat