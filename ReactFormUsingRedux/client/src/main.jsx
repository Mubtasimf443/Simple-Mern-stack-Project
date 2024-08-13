 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import { store } from './redux/store.jsx';


const router = createBrowserRouter([
  {
    path :'*',
    element :<><Home /></>,
  errorElement :<h2>error</h2>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
 <StrictMode >
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
   
 </StrictMode>
   
)
