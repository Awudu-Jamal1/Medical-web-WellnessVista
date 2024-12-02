
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Structure from "./layouts/Structure";
import HomeMain from "./components/HomePage/HomeMain";
import AboutMain from "./components/AboutUs/AboutMain";
import MainContact from "./components/Contact/mainContact";
import MainService from "./components/OurService/mainService";
import MainTech from "./components/Tech/mainTech";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Structure/>,
      children:[
        {path: "/",
        element: <HomeMain/> },
        {path: "/contact",
        element: <MainContact /> },
        {path: "/about",
        element: <AboutMain/> },
        {path: "/services",
        element: <MainService /> }
        ,
        {path: "/technologies",
        element: <MainTech /> },
        {path: "/our Work",
        element: <Blogs /> },
        {path: "/our team",
        element: <Footer/> }

      ]
    },
  ]);

  return (
    
    <>
    <RouterProvider router={router}/>
    </>


  );
};

export default App;
