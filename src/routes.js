import { createBrowserRouter } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/personaje/:id',
    element: <Detail/>
  }
]);

export default router;
