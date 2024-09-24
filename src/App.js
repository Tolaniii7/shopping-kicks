import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
