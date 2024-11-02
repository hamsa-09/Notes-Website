import {RouterProvider,createBrowserRouter} from 'react-router-dom';

import Create from './Create';
import Dnote from './Dnote';
import './App.css';

function App() {
  const router=createBrowserRouter([
  
    {path: '/', element:<Dnote/> },
    {path: '/create', element:<Create/> }
   
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
