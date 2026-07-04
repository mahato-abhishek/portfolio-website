
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Layout from "./components/Layout";
import { useTheme } from "./Context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  
  children:[
  {
    path: "/",
    element: <Home/>,
  },{
    path: "/Home",
    element: <Home/>,
  }
  
  ,{
    path:"/Projects",
    element:<Projects/>
  }
  ,{
    path:"/Contact",
    element:<Contact/>
  }
  ,{
    path:"/About",
    element:<About/>
  }
]}]);


function App() {
const {isDarkMode} = useTheme();

  return (
    <div className={isDarkMode?"dark dark:bg-linear-to-r from-gray-950 via-black to-gray-950 dark:text-white ":"bg-linear-to-r from-gray-300 via-white to-gray-300 "}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
