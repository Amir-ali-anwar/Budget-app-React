import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "/",
    //     element: <Dashboard />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);


function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
