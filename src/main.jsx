import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Error from './pages/Error';
import Chat from './pages/Chat';
import Git from './pages/Git';
import Contact from './pages/Contact';
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <Error />,
    children: [
      {
        path : '',
        element : <Home />
      },
      {
        path : '/chat',
        element : <Chat />
      },
      {
        path : '/git/:userId',
        element : <Git />
      },
      {
        path : '/contact',
        element : <Contact />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
