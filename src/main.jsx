// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'

import NotFound from './assets/components/NotFound'
import GenerationI from './assets/components/GenerationI'
import GenerationII from './assets/components/GenerationII'
import GenerationIII from './assets/components/GenerationIII'
import GenerationIV from './assets/components/GenerationIV'
import GenerationV from './assets/components/GenerationV'
import GenerationVI from './assets/components/GenerationVI'
import GenerationVII from './assets/components/GenerationVII'
import GenerationVIII from './assets/components/GenerationVIII'
import GenerationIX from './assets/components/GenerationIX'


const router = createBrowserRouter([
  {
    path:  "/",
    element: <App/>,
    errorElement: <NotFound/>, 
    children: [
      {
        path:  "/generation-i",
        element: <GenerationI genURL = "?offset=0&limit=151"/>,
      },
      {
        path:  "/generation-ii",
        element: <GenerationII genURL = "?offset=152&limit=100"/>,
      },
      {
        path:  "/generation-iii",
        element: <GenerationIII genURL = "?offset=252&limit=134"/>,
      },
      {
        path:  "/generation-iv",
        element: <GenerationIV genURL = "?offset=387&limit=106"/>,
      },
      {
        path:  "/generation-v",
        element: <GenerationV genURL = "?offset=494&limit=156"/>,
      },
      {
        path:  "/generation-vi",
        element: <GenerationVI genURL = "?offset=650&limit=72"/>,
      },
      {
        path:  "/generation-vii",
        element: <GenerationVII genURL = "?offset=722&limit=87"/>,
      },
      {
        path:  "/generation-viii",
        element: <GenerationVIII genURL = "?offset=810&limit=95"/>,
      },
      {
        path:  "/generation-ix",
        element: <GenerationIX genURL = "?offset=906&limit=119"/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/> 
 ,
)


// Generation I === 1-151
// Generation II === 152-251
// Generation III ===  252-386
// Generation IV ===  387-493
// Generation V === 494-649
// Generation VI === 650-721
// Generation VII ===  722-809
// Generation VIII ===  810-905
// Generation IX ===  906-1025