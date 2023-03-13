import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {logOutAction} from './actions/logout'
import Dashboard from './components/Dashboard'
import Main, { mainLoader } from './layout/Main'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element:<Dashboard />,
        errorElement: <Error />,
        // loader
      },
      {
        path:'logout',
        errorElement: <Error />,
        action:logOutAction
      }
    ]
  },
]);


function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
