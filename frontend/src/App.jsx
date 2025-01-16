import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home"
import Catagories from "./pages/Catagories"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Latest from "./pages/Latest"
import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Wishlist from "./pages/Wishlist"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Catagories />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women/>,
      },
      {
        path:"/latest",
        element:<Latest/>
      },
      {
        path:"/admin",
        element:<Admin/>
      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
