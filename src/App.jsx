import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { logOutAction } from './actions/logout'
import Dashboard from './components/Dashboard'
import Main, { mainLoader } from './layout/Main'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <Error />,
        // loader
      },
      {
        path: 'logout',
        errorElement: <Error />,
        action: logOutAction
      }
    ]
  },
]);


function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <RouterProvider router={router} />
        </Helmet>
      </div>;
    </HelmetProvider>
  )
}

export default App;
